import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { VERTICALS } from "../../components/Verticals/verticals";
import { submitLead } from "../../utils/leads";
import { track } from "../../utils/track";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "firm" | "role" | "vertical" | "assetCountry" | "size" | "timeline" | "consent";

const ROLE_KEYS = ["fundManager", "assetSponsorOrDeveloper", "bankOrFinancialInstitution", "adviserOrArranger", "other"] as const;
const SIZE_KEYS = ["under5m", "5to25m", "25to100m", "over100m", "notSure"] as const;
const TIMELINE_KEYS = ["within3Months", "3to6Months", "6to12Months", "exploring"] as const;
const PROVIDER_KEYS = ["trustee", "fundAdministrator", "custodian"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  name: string;
  email: string;
  firm: string;
  role: string;
  vertical: string;
  assetCountry: string;
  size: string;
  timeline: string;
  providers: string[];
  message: string;
  consent: boolean;
  botcheck: boolean;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  firm: "",
  role: "",
  vertical: "",
  assetCountry: "",
  size: "",
  timeline: "",
  providers: [],
  message: "",
  consent: false,
  botcheck: false,
};

export const IssuerIntakeForm = () => {
  const { t } = useTranslation();
  const { lang, localize } = useLang();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLSelectElement>>>({});
  const hasTrackedStart = useRef(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const onFieldFocus = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    track("issuer_intake_start", { lang });
  };

  const onTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onProviderToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setForm((current) => ({
      ...current,
      providers: checked ? [...current.providers, value] : current.providers.filter((item) => item !== value),
    }));
  };

  const onConsentChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, consent: event.target.checked }));

  const onBotcheckChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, botcheck: event.target.checked }));

  const validate = (): Partial<Record<FieldName, string>> => {
    const next: Partial<Record<FieldName, string>> = {};
    if (form.name.trim().length < 2) next.name = t("issuers.form.errors.required");
    if (!EMAIL_RE.test(form.email)) next.email = t("issuers.form.errors.email");
    if (form.firm.trim().length < 2) next.firm = t("issuers.form.errors.required");
    if (!form.role) next.role = t("issuers.form.errors.required");
    if (!form.vertical) next.vertical = t("issuers.form.errors.required");
    if (!form.assetCountry.trim()) next.assetCountry = t("issuers.form.errors.required");
    if (!form.size) next.size = t("issuers.form.errors.required");
    if (!form.timeline) next.timeline = t("issuers.form.errors.required");
    if (!form.consent) next.consent = t("issuers.form.errors.consent");
    return next;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Honeypot: a real visitor never fills this. Pretend success with no
    // network call so a bot has no signal its submission was rejected.
    if (form.botcheck) {
      setStatus("success");
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      track("issuer_intake_error", { type: "validation" });
      const firstInvalid = (Object.keys(validationErrors) as FieldName[])[0];
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");

    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source") ?? undefined;
    const utmMedium = params.get("utm_medium") ?? undefined;
    const utmCampaign = params.get("utm_campaign") ?? undefined;
    const utm =
      utmSource || utmMedium || utmCampaign
        ? { source: utmSource, medium: utmMedium, campaign: utmCampaign }
        : undefined;

    const payload = {
      name: form.name,
      email: form.email,
      firm: form.firm,
      role: form.role,
      vertical: form.vertical,
      assetCountry: form.assetCountry,
      size: form.size,
      timeline: form.timeline,
      providers: form.providers,
      message: form.message,
      consent: form.consent,
      formVersion: "2026-11-issuer-v1",
      lang,
      source: "sereel.com/issuers",
      ...(utm ? { utm } : {}),
    };

    try {
      await submitLead({
        endpoint: import.meta.env.VITE_ISSUER_INTAKE_URL,
        subject: "Issuer intake enquiry",
        payload,
      });
      setStatus("success");
      track("issuer_intake_submit", {
        vertical: form.vertical,
        size: form.size,
        timeline: form.timeline,
        role: form.role,
        lang,
      });
    } catch {
      setStatus("error");
      track("issuer_intake_error", { type: "network" });
    }
  };

  if (status === "success") {
    return (
      <div className="access-form">
        <h3 ref={successHeadingRef} tabIndex={-1}>
          {t("issuers.form.success.heading")}
        </h3>
        <p>{t("issuers.form.success.body")}</p>
        <Link className="text-link" to={localize("/")}>
          {t("issuers.form.success.backLink")} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form className="access-form intake-form" onSubmit={onSubmit} noValidate>
      <div className="access-fields is-two">
        <div className="field">
          <label htmlFor="issuer-name">{t("issuers.form.name")}</label>
          <input
            id="issuer-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={onTextChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.name = el;
            }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "issuer-name-error" : undefined}
            required
          />
          {errors.name && <span id="issuer-name-error" className="intake-field-error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="issuer-email">{t("issuers.form.email")}</label>
          <input
            id="issuer-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={onTextChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.email = el;
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "issuer-email-error" : undefined}
            required
          />
          {errors.email && <span id="issuer-email-error" className="intake-field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="issuer-firm">{t("issuers.form.firm")}</label>
          <input
            id="issuer-firm"
            name="firm"
            autoComplete="organization"
            value={form.firm}
            onChange={onTextChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.firm = el;
            }}
            aria-invalid={Boolean(errors.firm)}
            aria-describedby={errors.firm ? "issuer-firm-error" : undefined}
            required
          />
          {errors.firm && <span id="issuer-firm-error" className="intake-field-error">{errors.firm}</span>}
        </div>

        <div className="field">
          <label htmlFor="issuer-role">{t("issuers.form.role")}</label>
          <select
            id="issuer-role"
            name="role"
            value={form.role}
            onChange={onSelectChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.role = el;
            }}
            aria-invalid={Boolean(errors.role)}
            aria-describedby={errors.role ? "issuer-role-error" : undefined}
            required
          >
            <option value="" disabled>
              {t("issuers.form.selectPlaceholder")}
            </option>
            {ROLE_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`issuers.form.roleOptions.${key}`)}
              </option>
            ))}
          </select>
          {errors.role && <span id="issuer-role-error" className="intake-field-error">{errors.role}</span>}
        </div>

        <div className="field">
          <label htmlFor="issuer-vertical">{t("issuers.form.vertical")}</label>
          <select
            id="issuer-vertical"
            name="vertical"
            value={form.vertical}
            onChange={onSelectChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.vertical = el;
            }}
            aria-invalid={Boolean(errors.vertical)}
            aria-describedby={errors.vertical ? "issuer-vertical-error" : undefined}
            required
          >
            <option value="" disabled>
              {t("issuers.form.selectPlaceholder")}
            </option>
            {VERTICALS.map(({ key }) => (
              <option key={key} value={key}>
                {t(`verticals.items.${key}.name`)}
              </option>
            ))}
            <option value="other">{t("issuers.form.verticalOtherOption")}</option>
          </select>
          {errors.vertical && <span id="issuer-vertical-error" className="intake-field-error">{errors.vertical}</span>}
        </div>

        <div className="field">
          <label htmlFor="issuer-asset-country">{t("issuers.form.assetCountry")}</label>
          <input
            id="issuer-asset-country"
            name="assetCountry"
            autoComplete="country-name"
            value={form.assetCountry}
            onChange={onTextChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.assetCountry = el;
            }}
            aria-invalid={Boolean(errors.assetCountry)}
            aria-describedby={errors.assetCountry ? "issuer-asset-country-error" : undefined}
            required
          />
          {errors.assetCountry && (
            <span id="issuer-asset-country-error" className="intake-field-error">{errors.assetCountry}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="issuer-size">{t("issuers.form.size")}</label>
          <select
            id="issuer-size"
            name="size"
            value={form.size}
            onChange={onSelectChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.size = el;
            }}
            aria-invalid={Boolean(errors.size)}
            aria-describedby={errors.size ? "issuer-size-error" : undefined}
            required
          >
            <option value="" disabled>
              {t("issuers.form.selectPlaceholder")}
            </option>
            {SIZE_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`issuers.form.sizeOptions.${key}`)}
              </option>
            ))}
          </select>
          {errors.size && <span id="issuer-size-error" className="intake-field-error">{errors.size}</span>}
        </div>

        <div className="field">
          <label htmlFor="issuer-timeline">{t("issuers.form.timeline")}</label>
          <select
            id="issuer-timeline"
            name="timeline"
            value={form.timeline}
            onChange={onSelectChange}
            onFocus={onFieldFocus}
            ref={(el) => {
              if (el) fieldRefs.current.timeline = el;
            }}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "issuer-timeline-error" : undefined}
            required
          >
            <option value="" disabled>
              {t("issuers.form.selectPlaceholder")}
            </option>
            {TIMELINE_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`issuers.form.timelineOptions.${key}`)}
              </option>
            ))}
          </select>
          {errors.timeline && <span id="issuer-timeline-error" className="intake-field-error">{errors.timeline}</span>}
        </div>
      </div>

      <div className="field">
        <label>{t("issuers.form.providers")}</label>
        <div className="intake-checkbox-group">
          {PROVIDER_KEYS.map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                name="providers"
                value={key}
                checked={form.providers.includes(key)}
                onChange={onProviderToggle}
              />
              <span>{t(`issuers.form.providerOptions.${key}`)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="issuer-message">{t("issuers.form.message")}</label>
        <textarea
          id="issuer-message"
          name="message"
          maxLength={2000}
          value={form.message}
          onChange={onTextChange}
          onFocus={onFieldFocus}
        />
      </div>

      <label className="access-attest" htmlFor="issuer-consent">
        <input
          id="issuer-consent"
          type="checkbox"
          checked={form.consent}
          onChange={onConsentChange}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "issuer-consent-error" : undefined}
          required
        />
        <span>
          {t("issuers.form.consent")}{" "}
          <Link to={localize("/privacy-policy")}>{t("issuers.form.privacyLink")}</Link>
        </span>
      </label>
      {errors.consent && <span id="issuer-consent-error" className="intake-field-error">{errors.consent}</span>}

      {/* Honeypot — real visitors never see or fill this. */}
      <label style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }} aria-hidden="true">
        {"Leave this field empty"}
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" checked={form.botcheck} onChange={onBotcheckChange} />
      </label>

      <div className="access-actions">
        <button className="market-cta primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("issuers.form.sending") : t("issuers.form.submit")}
        </button>
      </div>
      <p className={`access-status is-${status}`} role="status" aria-live="polite">
        {status === "error" && t("issuers.form.errors.network")}
      </p>
    </form>
  );
};

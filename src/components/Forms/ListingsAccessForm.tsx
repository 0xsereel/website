import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

type Status = "idle" | "sending" | "success" | "error";

const LISTINGS_ACCESS_URL = import.meta.env.VITE_LISTINGS_ACCESS_URL as string | undefined;
const ATTESTATION_VERSION = "2026-11-qp-v1";

/**
 * Request access to listings in dlala. Posts to dlala's access-request
 * endpoint when VITE_LISTINGS_ACCESS_URL is set (APPS-94), otherwise to the
 * same Web3Forms inbox as the contact form so requests are never lost.
 */
export const ListingsAccessForm = ({ compact = false }: { compact?: boolean }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: "", firm: "", country: "", qualified: false });
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.email || !form.firm || !form.country || !form.qualified) {
      setStatus("error");
      setMessage(t("listings.form.errors.required"));
      return;
    }

    setStatus("sending");
    setMessage("");
    const payload = {
      email: form.email,
      firm: form.firm,
      country: form.country,
      qualifiedPurchaserAttestation: form.qualified,
      attestationVersion: ATTESTATION_VERSION,
      source: "sereel.com",
    };

    try {
      const response = LISTINGS_ACCESS_URL
        ? await fetch(LISTINGS_ACCESS_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
              subject: "Listings access request",
              ...payload,
            }),
          });

      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
      setMessage(t("listings.form.success"));
      setForm({ email: "", firm: "", country: "", qualified: false });
    } catch {
      setStatus("error");
      setMessage(t("listings.form.errors.network"));
    }
  };

  return (
    <form className={`access-form${compact ? " is-compact" : ""}`} onSubmit={onSubmit} noValidate>
      <div className="access-fields">
        <div className="field">
          <label htmlFor="access-email">{t("listings.form.email")}</label>
          <input id="access-email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} required />
        </div>
        <div className="field">
          <label htmlFor="access-firm">{t("listings.form.firm")}</label>
          <input id="access-firm" name="firm" autoComplete="organization" value={form.firm} onChange={onChange} required />
        </div>
        <div className="field">
          <label htmlFor="access-country">{t("listings.form.country")}</label>
          <input id="access-country" name="country" autoComplete="country-name" value={form.country} onChange={onChange} required />
        </div>
      </div>
      <label className="access-attest" htmlFor="access-qualified">
        <input id="access-qualified" name="qualified" type="checkbox" checked={form.qualified} onChange={onChange} required />
        <span>{t("listings.form.attestation")}</span>
      </label>
      <div className="access-actions">
        <button className="market-cta primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("listings.form.sending") : t("listings.form.submit")}
        </button>
        <p className="access-notice">{t("listings.form.notice")}</p>
      </div>
      <p className={`access-status is-${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
};

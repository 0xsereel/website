import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";
import { SEO } from "../../components/SEO";
import { useLang } from "../../i18n/LanguageProvider";
import { ReportingFlow } from "../../components/Verified/ReportingFlow";
import { VerifiedCard, VerifiedPill } from "../../components/Verified/VerifiedCard";

const ManagerForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", firm: "", fund: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.firm) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: "Sereel Verified enquiry",
          ...form,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
      setForm({ name: "", email: "", firm: "", fund: "" });
    } catch {
      setStatus("error");
    }
  };

  const fields = ["name", "email", "firm", "fund"] as const;

  return (
    <form className="access-form" onSubmit={onSubmit} noValidate>
      <div className="access-fields is-two">
        {fields.map((field) => (
          <div className="field" key={field}>
            <label htmlFor={`verified-${field}`}>{t(`verified.managerForm.${field}`)}</label>
            <input
              id={`verified-${field}`}
              name={field}
              type={field === "email" ? "email" : "text"}
              value={form[field]}
              onChange={onChange}
              required={field !== "fund"}
            />
          </div>
        ))}
      </div>
      <div className="access-actions">
        <button className="market-cta primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("listings.form.sending") : t("verified.managerForm.submit")}
        </button>
      </div>
      <p className={`access-status is-${status}`} role="status" aria-live="polite">
        {status === "success" && t("verified.managerForm.success")}
        {status === "error" && t("verified.managerForm.error")}
      </p>
    </form>
  );
};

export const SereelVerified = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  const means = t("verified.means.items", { returnObjects: true }) as string[];
  const notMeans = t("verified.notMeans.items", { returnObjects: true }) as string[];

  return (
    <main className="wrap inner-page">
      <SEO
        title={t("verified.seo.title")}
        description={t("verified.seo.description")}
        canonical={localize("/sereel-verified")}
        hreflangPath="/sereel-verified"
      />
      <section className="page-hero verified-hero">
        <div>
          <div className="mono eyebrow lit">[ {t("verified.eyebrow")} ]</div>
          <h1>{t("verified.heading")}</h1>
          <p className="lede">{t("verified.lede")}</p>
        </div>
        <VerifiedCard />
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("verified.how.eyebrow")} ]</div>
            <h2>{t("verified.how.heading")}</h2>
          </div>
        </div>
        <ReportingFlow />
      </section>

      <section className="section">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("verified.states.eyebrow")} ]</div>
            <h2>{t("verified.states.heading")}</h2>
          </div>
        </div>
        <div className="state-grid">
          <div className="state-card">
            <VerifiedPill />
            <p>{t("verified.states.verified.body")}</p>
          </div>
          <div className="state-card">
            <VerifiedPill state="lapsed" />
            <p>{t("verified.states.lapsed.body")}</p>
          </div>
          <div className="state-card">
            <span className="verified-pill is-none">{t("verified.states.none.pill")}</span>
            <p>{t("verified.states.none.body")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="means-grid">
          <div>
            <h3>{t("verified.means.heading")}</h3>
            <ul className="means-list">
              {means.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t("verified.notMeans.heading")}</h3>
            <ul className="means-list is-not">
              {notMeans.map((item) => (
                <li key={item}>
                  <X size={16} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="get-verified">
        <div className="sec-head">
          <div>
            <div className="mono eyebrow lit">[ {t("verified.managers.eyebrow")} ]</div>
            <h2>{t("verified.managers.heading")}</h2>
          </div>
          <p className="lede">{t("verified.managers.lede")}</p>
        </div>
        <ManagerForm />
      </section>
    </main>
  );
};

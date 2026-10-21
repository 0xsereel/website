import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactContent = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    firm: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [resultStatus, setResultStatus] = useState<"" | "info" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.fname === "" ||
      form.lname === "" ||
      form.email === "" ||
      form.message === ""
    ) {
      setResult(t("contact.form.errors.required"));
      setResultStatus("error");
      return;
    }

    setLoading(true);
    setResult(t("contact.form.status.sending"));
    setResultStatus("info");

    const data = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: form.fname + " " + form.lname,
      email: form.email,
      institution: form.firm,
      message: form.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult(t("contact.form.status.success"));
        setResultStatus("success");
        setForm({ fname: "", lname: "", email: "", firm: "", message: "" });
      } else {
        setResult(
          resultData.message || t("contact.form.status.genericError")
        );
        setResultStatus("error");
      }
    } catch {
      setResult(t("contact.form.status.networkError"));
      setResultStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="wrap">
      <section className="page-hero">
        <div className="mono eyebrow lit">[ {t("contact.eyebrow")} ]</div>
        <h1>
          {t("contact.hero.headingStart")} <span className="lit">{t("contact.hero.headingHighlight")}</span>
        </h1>
        <p className="lede">{t("contact.hero.lede")}</p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="row2">
              <div className="field">
                <label htmlFor="fname">{t("contact.form.fields.firstName.label")}</label>
                <input
                  id="fname"
                  name="fname"
                  placeholder={t("contact.form.fields.firstName.placeholder")}
                  value={form.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lname">{t("contact.form.fields.lastName.label")}</label>
                <input
                  id="lname"
                  name="lname"
                  placeholder={t("contact.form.fields.lastName.placeholder")}
                  value={form.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">{t("contact.form.fields.email.label")}</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t("contact.form.fields.email.placeholder")}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="firm">{t("contact.form.fields.institution.label")}</label>
              <input
                id="firm"
                name="firm"
                placeholder={t("contact.form.fields.institution.placeholder")}
                value={form.firm}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="msg">{t("contact.form.fields.message.label")}</label>
              <textarea
                id="msg"
                name="message"
                placeholder={t("contact.form.fields.message.placeholder")}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="submit" type="submit" disabled={loading}>
              {loading ? t("contact.form.status.sending") : t("contact.form.submit")}
            </button>
            {result && (
              <span
                className="mono"
                style={{
                  color: resultStatus === "success"
                    ? "var(--accent)"
                    : resultStatus === "error"
                    ? "#ff6b6b"
                    : "var(--ink-2)",
                  marginTop: 8,
                  display: "block",
                }}
              >
                ● {result}
              </span>
            )}
          </form>

          <div className="info">
            <div className="card">
              <div className="mono label">{t("contact.info.emailLabel")}</div>
              <div className="v">
                <a href="mailto:team@sereel.com">team@sereel.com</a>
              </div>
            </div>
            <div className="card">
              <div className="mono label">{t("contact.info.locationsLabel")}</div>
              <div className="locs">
                <span>{t("contact.info.locations.chicago")}</span>
                <span>{t("contact.info.locations.nairobi")}</span>
                <span>{t("contact.info.locations.kigali")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

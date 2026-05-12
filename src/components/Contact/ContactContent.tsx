import { useState } from "react";

export const ContactContent = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    firm: "",
    message: "",
  });
  const [result, setResult] = useState("");
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
      setResult("Please fill all the required fields");
      return;
    }

    setLoading(true);
    setResult("Sending...");

    const data = {
      access_key: "4a825a6a-442e-4605-a310-96c8ad3f0854",
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
        setResult("Thank you for contacting us!");
        setForm({ fname: "", lname: "", email: "", firm: "", message: "" });
      } else {
        setResult(
          resultData.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="wrap">
      <section className="page-hero">
        <div className="mono eyebrow lit">[ Contact ]</div>
        <h1>
          Let&apos;s <span className="lit">talk.</span>
        </h1>
        <p className="lede">
          Tell us about your tokenization needs. We respond within one business
          day.
        </p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="row2">
              <div className="field">
                <label htmlFor="fname">First name</label>
                <input
                  id="fname"
                  name="fname"
                  placeholder="Jane"
                  value={form.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lname">Last name</label>
                <input
                  id="lname"
                  name="lname"
                  placeholder="Smith"
                  value={form.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jane@yourfirm.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="firm">Institution</label>
              <input
                id="firm"
                name="firm"
                placeholder="Your firm"
                value={form.firm}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                name="message"
                placeholder="What are you looking to tokenize?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="submit" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message →"}
            </button>
            {result && (
              <span
                className="mono"
                style={{
                  color: result.includes("Thank you")
                    ? "var(--accent)"
                    : result.includes("error") || result.includes("Please")
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
              <div className="mono label">Email</div>
              <div className="v">
                <a href="mailto:team@sereel.com">team@sereel.com</a>
              </div>
            </div>
            <div className="card">
              <div className="mono label">Offices</div>
              <div className="locs">
                <span>Chicago</span>
                <span>Nairobi</span>
                <span>Zürich</span>
                <span>Kigali</span>
              </div>
            </div>
            <div className="card">
              <div className="mono label">Response time</div>
              <div className="v" style={{ fontSize: 18 }}>
                Within 1 business day
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

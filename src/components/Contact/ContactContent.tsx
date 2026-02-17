import { useState } from "react";
import { C, grdT } from "../Core/theme";
import { MeshBg, Gc, Rv } from "../Core/shared";

export const ContactContent = () => {
  const contactImagePath = "/images/contact/contact.jpg";

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
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
    if (
      form.fname === "" ||
      form.lname === "" ||
      form.email === "" ||
      form.message === ""
    ) {
      setResult("Please fill all the fields");
      return;
    }

    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const data = {
      access_key: "4a825a6a-442e-4605-a310-96c8ad3f0854",
      name: form.fname + " " + form.lname,
      email: form.email,
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
        setForm({ fname: "", lname: "", email: "", message: "" });
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
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        padding: "100px clamp(16px,4vw,56px) 60px",
        position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%", textAlign: "center" }}>
          <Rv>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2.5px",
              fontFamily: "var(--display)",
              marginBottom: 20,
            }}>
              <span style={grdT}>Get In</span> Touch
            </h1>
          </Rv>
          <Rv d={0.08}>
            <p style={{ fontSize: 17, color: C.w2, maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              Ready to transform your institution with cutting-edge DeFi solutions? Let's start the conversation.
            </p>
          </Rv>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "60px clamp(16px,4vw,56px) 120px", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "start" }}>
          {/* Left - Form */}
          <div>
            <Rv>
              <h2 style={{ fontSize: "clamp(28px,3.2vw,40px)", fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "var(--display)", marginBottom: 12 }}>
                Let's <span style={grdT}>Talk</span>
              </h2>
              <p style={{ fontSize: 16, color: C.m, marginBottom: 32, lineHeight: 1.7 }}>
                Get in touch with us using the enquiry form or contact details below
              </p>
            </Rv>

            {/* Result Message */}
            {result && (
              <Rv>
                <div style={{
                  padding: "16px 20px",
                  borderRadius: 10,
                  marginBottom: 24,
                  border: `1px solid ${result.includes("Thank you") ? C.g + "40" : result.includes("Please") ? "#ef444450" : "#3b82f650"}`,
                  background: result.includes("Thank you") ? C.gD : result.includes("Please") ? "#ef444410" : "#3b82f610",
                  color: result.includes("Thank you") ? C.g : result.includes("Please") ? "#ef4444" : "#3b82f6",
                }}>
                  <p style={{ fontSize: 14, fontWeight: 600 }}>{result}</p>
                </div>
              </Rv>
            )}

            {/* Form */}
            <Rv d={0.1}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Name Fields */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="fname" style={{ fontSize: 14, fontWeight: 600, color: C.w, marginBottom: 8, display: "block" }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      value={form.fname}
                      onChange={handleChange}
                      placeholder="John"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 8,
                        border: `1px solid ${C.border}`,
                        background: C.card,
                        color: C.w,
                        fontSize: 14,
                        outline: "none",
                        transition: "all 0.2s",
                        fontFamily: "var(--body)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = C.g + "40";
                        e.currentTarget.style.background = C.cardHi;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = C.border;
                        e.currentTarget.style.background = C.card;
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" style={{ fontSize: 14, fontWeight: 600, color: C.w, marginBottom: 8, display: "block" }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      value={form.lname}
                      onChange={handleChange}
                      placeholder="Doe"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 8,
                        border: `1px solid ${C.border}`,
                        background: C.card,
                        color: C.w,
                        fontSize: 14,
                        outline: "none",
                        transition: "all 0.2s",
                        fontFamily: "var(--body)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = C.g + "40";
                        e.currentTarget.style.background = C.cardHi;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = C.border;
                        e.currentTarget.style.background = C.card;
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={{ fontSize: 14, fontWeight: 600, color: C.w, marginBottom: 8, display: "block" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@yourcompany.com"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      background: C.card,
                      color: C.w,
                      fontSize: 14,
                      outline: "none",
                      transition: "all 0.2s",
                      fontFamily: "var(--body)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = C.g + "40";
                      e.currentTarget.style.background = C.cardHi;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.background = C.card;
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={{ fontSize: 14, fontWeight: 600, color: C.w, marginBottom: 8, display: "block" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your institution's DeFi needs..."
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      background: C.card,
                      color: C.w,
                      fontSize: 14,
                      outline: "none",
                      resize: "vertical",
                      transition: "all 0.2s",
                      fontFamily: "var(--body)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = C.g + "40";
                      e.currentTarget.style.background = C.cardHi;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.background = C.card;
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="sb"
                  disabled={loading}
                  style={{ width: "100%", padding: "16px", fontSize: 15 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Rv>
          </div>

          {/* Right - Image and Contact Info */}
          <div>
            <Rv d={0.15}>
              {/* Image */}
              <div style={{ marginBottom: 24 }}>
                <img
                  src={contactImagePath}
                  alt="Contact Sereel Team"
                  style={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    borderRadius: 12,
                    border: `1px solid ${C.border}`,
                    filter: "grayscale(100%)",
                    transition: "filter 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
                />
              </div>
            </Rv>

            {/* Contact Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Rv d={0.2}>
                <Gc p="20px 24px">
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: C.gD,
                      border: `1px solid ${C.g}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                    }}>
                      ✉️
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: C.d, marginBottom: 4, fontFamily: "var(--mono)", letterSpacing: "1px" }}>Email us at</p>
                      <a
                        href="mailto:team@sereel.com"
                        style={{
                          fontSize: 16,
                          color: C.g,
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                      >
                        team@sereel.com
                      </a>
                    </div>
                  </div>
                </Gc>
              </Rv>
            </div>

            {/* CTA Card */}
            <Rv d={0.3}>
              <Gc style={{ marginTop: 24, textAlign: "center" }} p="28px 24px">
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.w, marginBottom: 8 }}>
                  Ready to Get Started?
                </h3>
                <p style={{ fontSize: 13, color: C.m, lineHeight: 1.6 }}>
                  Our team typically responds within 24 hours to discuss your institutional DeFi needs.
                </p>
              </Gc>
            </Rv>
          </div>
        </div>
      </section>
    </>
  );
};

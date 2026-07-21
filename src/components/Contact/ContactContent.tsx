import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ContactContent = () => {
  const [form, setForm] = useState({ fname: "", lname: "", email: "", firm: "", message: "" });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.fname || !form.lname || !form.email || !form.message) {
      setResult("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setResult("Sending your request…");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: `${form.fname} ${form.lname}`,
          email: form.email,
          institution: form.firm,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setResult("Thank you. We’ll be in touch shortly.");
        setForm({ fname: "", lname: "", email: "", firm: "", message: "" });
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 28 }, visible: { opacity: 1, y: 0 } };
  const resultIsError = result.includes("Please") || result.includes("error") || result.includes("wrong");

  return (
    <main className="contact-redesign">
      <section className="contact-intro wrap">
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .75 }}>
          <span className="about-label">Start a conversation</span>
          <h1>Build the rails behind your next financial product.</h1>
        </motion.div>
        <motion.div className="contact-intro-note" initial="hidden" animate="visible" variants={reveal} transition={{ duration: .75, delay: .12 }}>
          <p>Tell us what you are building, where it will operate, and which controls matter. We will bring the right infrastructure team into the conversation.</p>
          <a href="mailto:team@sereel.com">team@sereel.com <span>↗</span></a>
        </motion.div>
      </section>

      <section className="contact-workspace">
        <div className="wrap contact-workspace-grid">
          <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={reveal} transition={{ duration: .7 }}>
            <div className="contact-form-head"><span>Consultation request</span><small>Fields marked * are required</small></div>
            <div className="row2">
              <div className="field"><label htmlFor="fname">First name *</label><input id="fname" name="fname" autoComplete="given-name" placeholder="Jane" value={form.fname} onChange={handleChange} required /></div>
              <div className="field"><label htmlFor="lname">Last name *</label><input id="lname" name="lname" autoComplete="family-name" placeholder="Smith" value={form.lname} onChange={handleChange} required /></div>
            </div>
            <div className="row2">
              <div className="field"><label htmlFor="email">Work email *</label><input id="email" type="email" name="email" autoComplete="email" placeholder="jane@institution.com" value={form.email} onChange={handleChange} required /></div>
              <div className="field"><label htmlFor="firm">Institution</label><input id="firm" name="firm" autoComplete="organization" placeholder="Your institution" value={form.firm} onChange={handleChange} /></div>
            </div>
            <div className="field"><label htmlFor="msg">What are you building? *</label><textarea id="msg" name="message" placeholder="Product type, target market, timeline, and infrastructure requirements…" value={form.message} onChange={handleChange} required /></div>
            <div className="contact-submit-row">
              <button className="submit" type="submit" disabled={loading}><span>{loading ? "Sending…" : "Send request"}</span><i aria-hidden="true"><ArrowUpRight size={17} strokeWidth={1.8} /></i></button>
              <span className="contact-privacy">By submitting, you agree to be contacted about your request.</span>
            </div>
            {result && <div className={`contact-result ${resultIsError ? "is-error" : ""}`} role="status"><i />{result}</div>}
          </motion.form>

          <motion.aside className="contact-process" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal} transition={{ duration: .7, delay: .12 }}>
            <span className="about-label">What happens next</span>
            <ol>
              <li><span>01</span><div><h2>Architecture review</h2><p>We assess the product, jurisdiction, participants, and operating requirements.</p></div></li>
              <li><span>02</span><div><h2>Control mapping</h2><p>We map custody, compliance, issuance, settlement, and reporting rails.</p></div></li>
              <li><span>03</span><div><h2>Deployment path</h2><p>You receive a practical path from product design to controlled market operation.</p></div></li>
            </ol>
            <div className="contact-response"><i /><div><strong>Response time</strong><span>Within one business day</span></div></div>
          </motion.aside>
        </div>
      </section>

      <section className="contact-footnote wrap">
        <span>Chicago <small>USA</small></span><span>Nairobi <small>Kenya</small></span><span>Zürich <small>Switzerland</small></span>
        <p>Institutional infrastructure. Global deployment.</p>
      </section>
    </main>
  );
};

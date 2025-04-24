import React, { useState } from "react";
import { Button } from "../Button/Button";

interface ContactUsProps {
  onClose: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const data = {
      access_key: "563fd04c-e608-49a9-80d5-40151dcd7832",
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Thank you for contacting us!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult(resultData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg bg-green-900 p-8 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-green-300 hover:text-green-500"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-green-300">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border border-green-700 rounded bg-black text-green-300 placeholder-green-500"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border border-green-700 rounded bg-black text-green-300 placeholder-green-500"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full mb-4 p-2 border border-green-700 rounded bg-black text-green-300 placeholder-green-500"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-4 p-2 border border-green-700 rounded bg-black text-green-300 placeholder-green-500"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" disabled={loading} className="w-full bg-green-700 text-black hover:bg-green-600">
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {result && <p className="mt-4 text-center text-green-300">{result}</p>}
        </form>
      </div>
    </div>
  );
};

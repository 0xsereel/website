import { useState } from "react";
import { Button } from "../Button/Button";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setMessage("Submitting...");

    const data = {
      access_key: "563fd04c-e608-49a9-80d5-40151dcd7832",
      email,
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

      const result = await response.json();

      if (result.success) {
        setMessage("Thank you for signing up!");
        setEmail("");
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex items-center justify-center py-20 bg-gradient-to-bl from-[#1CA36E]/50 via-black  to-[#1CA36E]/50 h-[550px]">
      <div className="w-[95%] mx-auto flex justify-center items-center flex-col">
        {/* Title */}
        <div className="w-full flex items-center justify-center flex-col">
          <h3 className="lg:text-5xl text-3xl text-center">Newsletter Signup</h3>
          <p className="mt-2 text-center">
            The solutions our product offers are seamless, secure and accessible
          </p>
        </div>

        <form
          className="w-full my-20 flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="lg:w-[600px] w-full bg-black border border-[#202026] rounded-full flex items-center justify-between p-2">
            <input
              type="email"
              className="outline-none border-none text-xl w-[69%]"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="hidden lg:block">
              <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Get started now"}
              </Button>
            </div>
            <div className="lg:hidden">
              <Button type="submit" disabled={loading}>
                <></>
              </Button>
            </div>
          </div>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </section>
  );
};

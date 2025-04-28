import { Button } from "../Button/Button";
import { IoMailOutline, IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

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
      access_key: "563fd04c-e608-49a9-80d5-40151dcd7832",
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
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full lg:h-[400px] bg-black h-[200px] flex items-center  flex-col  bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30    ">
        <div className=" flex text-center items-center h-full justify-center mt-20 lg:text-5xl text-3xl font-bold gap-5">
          <h3>Get In Touch</h3>
        </div>
      </div>

      <div className="w-full p-5 lg:my-20 my-10">
        <div className="lg:w-[95%] w-full mx-auto flex items-center justify-between lg:flex-row flex-col">
          <div className="lg:w-[50%] w-full">
            <div className="w-full">
              <h3 className="text-3xl font-gilroy-bold">Let's Talk</h3>
              <p className="my-3 text-xl">
                Get in touch with us using the enquiry form or{" "}
                <br className="lg:block hidden" /> contact details below
              </p>
            </div>

            <div>
              {result && (
                <div className="w-full mt-5">
                  <p className="text-xl text-green-500">{result}</p>
                </div>
              )}
            </div>

            {/* form */}

            <div className="w-full mt-10">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="w-full flex items-center justify-between">
                  <div className="w-[45%]">
                    <label
                      htmlFor="fname"
                      className="text-xl font-gilroy-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="w-full mt-2 border border-[#202026] rounded-lg p-2 outline-none"
                      value={form.fname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="w-[45%]">
                    <label
                      htmlFor="lname"
                      className="text-xl font-gilroy-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="w-full mt-2 border border-[#202026] rounded-lg p-2 outline-none"
                      value={form.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="w-full mt-5">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="text-xl font-gilroy-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full mt-2 border border-[#202026] rounded-lg p-2 outline-none"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="w-full mt-5">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="text-xl font-gilroy-medium"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="w-full mt-2 border border-[#202026] rounded-lg p-2 outline-none resize-none"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="w-full mt-5">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-[50%] w-full lg:mt-0 mt-10">
            <div className="w-[95%] mx-auto ">
              <div className="w-full">
                <img
                  src={contactImagePath}
                  alt="contact"
                  className="w-full h-full object-cover grayscale rounded-xl"
                />
              </div>

              <div className="w-full mt-5">
                <div className="w-full flex items-center gap-5 text-xl">
                  <div className="w-[40px] h-[40px] border flex items-center justify-center rounded-full">
                    <IoMailOutline />
                  </div>

                  <div>
                    <p>team@seree.xyz</p>
                  </div>
                </div>

                <div className="w-full flex items-center gap-5 text-xl my-3">
                  <div className="w-[40px] h-[40px] border flex items-center justify-center rounded-full">
                    <IoLocationSharp />
                  </div>

                  <div>
                    <p>Africa and USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

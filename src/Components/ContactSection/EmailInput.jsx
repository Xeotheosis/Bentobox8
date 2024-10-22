import { useState } from "react";
import emailjs from "emailjs-com";
import SendMessage from "./SendMessage";

const EmailInput = ({ notify }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Check email validation when the email input value changes
    if (name === "email") {
      setIsValidEmail(validateEmail(value));
    }
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If the email is not valid, prevent form submission
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_bzwy2ea",
        "template_o9ox1ot",
        {
          from_name: form.name,
          to_name: "Andrei",
          from_email: form.email,
          to_email: "neacsu.andrei.ro@gmail.com",
          message: form.message,
        },
        "41112GfE0j06BL1JM"
      )
      .then(
        (result) => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          notify();
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong...");
        }
      );
  };
  return (
    <section className="order-2 lg:order-none bg-box-color p-4 md:message rounded-xl lg:col-span-5 lg:row-span-4 scale-up-center-third xl:min-h-[28rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-white gap-5 h-full xl:p-4 xl:text-xl max-h-[18rem] md:max-h-none">
        <input
          className="bg-transparent outline-none font-bold placeholder:text-xl"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          className="bg-transparent outline-none font-bold placeholder:text-xl"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        {!isValidEmail && (
          <p className="text-align-left text-red-500">
            Please enter a valid email address.
          </p>
        )}

        <textarea
          rows="7"
          className="bg-transparent outline-none resize-none font-bold h-full placeholder:text-xl"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <SendMessage loading={loading} />
      </form>
    </section>
  );
};

export default EmailInput;

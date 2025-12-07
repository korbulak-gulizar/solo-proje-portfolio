import React, { useState } from "react";
import "../styles/contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Teşekkürler mesajınız iletildi!, ${formData.name}!`);
    console.log(formData);
  };

  return (
    <div>
      <p>
        I am always open to discussing new projects, opportunities in tech
        world, partnerships and more so mentorship.{" "}
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

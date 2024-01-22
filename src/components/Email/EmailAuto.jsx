import React, { useState } from "react";
import emailjs from "emailjs-com"; // Update the import statement

import "./EmailAuto.css";

export default function EmailAuto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_1gsafi3"; // Replace with your actual service ID
    const templateId = "template_lrrv8zp"; // Replace with your actual template ID

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name,
        recipient: email,
      });
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
      // Reset form fields after submission
      setName("");
      setEmail("");
    }
  };

  return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn" disabled={loading}>
          Subscribe
        </button>
      </form>
    </section>
  );
}

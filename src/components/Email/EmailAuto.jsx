import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./EmailAuto.css"; // Make sure to update the import if needed
import Navbar from "../NavBar/NavBar";

export default function EmailAuto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize emailjs with your user-id
    emailjs.init("3OO27FbyO9f3HW4S-"); // Replace "user_yourUserId" with your actual user-id
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_scvu0r8"; // Replace with your actual service ID
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
    <div>
      <Navbar />
      <section className="email-auto-section">
        <aside className="email-auto-aside"></aside>
        <form className="email-auto-form" onSubmit={handleSubmit}>
          <div className="email-auto-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email-auto-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="email-auto-btn" disabled={loading}>
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

// src/components/Contact.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  contactEmail,
  emailjsServiceId,
  emailjsTemplateId,
  emailjsPublicKey,
} from "../config";

// Initialize EmailJS once
if (emailjsPublicKey) {
  try {
    emailjs.init(emailjsPublicKey);
  } catch (err) {
    // ignore if already initialized
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  function update(k, v) {
    setForm((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: null }));
  }

  function validate() {
    const e = {};
    if (!form.name || !form.name.trim()) e.name = "Please enter your name.";
    if (!form.email || !form.email.trim()) e.email = "Please enter your email.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message || !form.message.trim())
      e.message = "Please enter a message.";
    return e;
  }

  async function submit(ev) {
    ev.preventDefault();
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      setStatus({ loading: false, ok: false, msg: "Please fix errors above." });
      return;
    }

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Email service not configured. Please set EmailJS env variables.",
      });
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const payload = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: contactEmail,
      };

      const result = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        payload
      );

      if (result && result.status === 200) {
        setStatus({
          loading: false,
          ok: true,
          msg: "Message sent — thank you!",
        });
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error("EmailJS returned unexpected response");
      }
    } catch (err) {
      console.error("Email send error:", err);
      setStatus({
        loading: false,
        ok: false,
        msg: err.message || "Submission failed — try again later.",
      });
    }
  }

  return (
    <section
      id="contact"
      className="section fade-up"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Contact</h2>
      <div className="card" style={{ display: "grid", gap: 12 }}>
        <form onSubmit={submit} style={{ display: "grid", gap: 12 }} noValidate>
          <div>
            <label
              htmlFor="contact-name"
              className="small"
              style={{ display: "block", marginBottom: 6 }}
            >
              Name:
            </label>
            <input
              id="contact-name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && (
              <div
                id="err-name"
                role="alert"
                className="small"
                style={{ color: "#ffb4b4", marginTop: 6 }}
              >
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="small"
              style={{ display: "block", marginBottom: 6 }}
            >
              Email:
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="your@domain.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email && (
              <div
                id="err-email"
                role="alert"
                className="small"
                style={{ color: "#ffb4b4", marginTop: 6 }}
              >
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="small"
              style={{ display: "block", marginBottom: 6 }}
            >
              Message:
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Brief message about the role or project..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && (
              <div
                id="err-message"
                role="alert"
                className="small"
                style={{ color: "#ffb4b4", marginTop: 6 }}
              >
                {errors.message}
              </div>
            )}
          </div>

          <div style={{ height: 8 }} />

          <div>
            <button
              className="cta"
              type="submit"
              disabled={status.loading}
              aria-disabled={status.loading}
              style={{ minWidth: 140 }}
            >
              {status.loading ? "Sending…" : "Send"}
            </button>
          </div>

          <div style={{ height: 8 }} />

          <div className="small" style={{ color: "var(--muted)" }}>
            Or email directly:
            <div style={{ marginTop: 6 }}>
              <a
                href={`mailto:${contactEmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div
            role="status"
            aria-live="polite"
            style={{
              marginTop: 6,
              color: status.ok ? "lightgreen" : "#ffb4b4",
            }}
          >
            {status.msg}
          </div>
        </form>
      </div>
    </section>
  );
}

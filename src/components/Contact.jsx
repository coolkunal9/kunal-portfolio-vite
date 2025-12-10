// src/components/Contact.jsx
import React, { useState } from "react";
import { contactEmail } from "../config";

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
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  }

  async function submit(e) {
    e.preventDefault();
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      setStatus({ loading: false, ok: false, msg: "Please fix errors above." });
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const endpoint = "https://formspree.io/f/xeoyrgdd"; // your Formspree endpoint

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`, // optional subject
        }),
      });

      // Formspree returns 200/201 for success; handle JSON error messages if any
      if (!res.ok) {
        let errMsg = "Submission failed — please try again later.";
        try {
          const errJson = await res.json();
          if (errJson && errJson.error) errMsg = errJson.error;
        } catch (jsonErr) {
          // ignore parse error
        }
        throw new Error(errMsg);
      }

      setStatus({ loading: false, ok: true, msg: "Message sent — thank you!" });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
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
          {/* Name */}
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

          {/* Email */}
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

          {/* Message */}
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

          {/* blank line before button */}
          <div style={{ height: 8 }} />

          {/* Send button */}
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

          {/* blank line between button and email */}
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

          {/* submission status */}
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

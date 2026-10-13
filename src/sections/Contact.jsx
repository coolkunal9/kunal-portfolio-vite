import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { PERSONAL } from "../data/content";
import { Mail, Send, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "../components/Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    // Formspree submission
    try {
      const res = await fetch("https://formspree.io/f/xpwdwdqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      // Fallback: open mailto
      setStatus("error");
      window.location.href = `mailto:${PERSONAL.email}?subject=Portfolio Contact&body=${encodeURIComponent(form.message)}`;
    }
  };

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kunalprasaddev",
      href: PERSONAL.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "coolkunal9",
      href: PERSONAL.github,
    },
  ];

  const inputClasses =
    "w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-text-muted)]";

  return (
    <section id="contact" className="section">
      <ScrollReveal>
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-desc">
          I'm open to entry-level frontend and data analyst roles. Feel free to
          reach out with opportunities, project ideas, or just to say hello.
        </p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Left: Links */}
        <ScrollReveal className="md:col-span-2" delay={0.1}>
          <div className="flex flex-col gap-3">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-3 rounded-xl p-4 transition-colors"
                style={{ background: "var(--color-surface)" }}
              >
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent-border)",
                  }}
                >
                  <Icon size={16} style={{ color: "var(--color-accent)" }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{label}</p>
                  <p
                    className="truncate text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {value}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: Form */}
        <ScrollReveal className="md:col-span-3" delay={0.2}>
          <div
            className="card rounded-2xl p-6"
            style={{ background: "var(--color-surface)" }}
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-12 text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    background: "var(--color-success-soft)",
                    border: "1px solid",
                    borderColor: "color-mix(in srgb, var(--color-success) 25%, transparent)",
                  }}
                >
                  <Send size={20} style={{ color: "var(--color-success)" }} />
                </div>
                <h3 className="text-lg font-semibold">Message sent!</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClasses}
                      style={{
                        borderColor: errors.name
                          ? "#ef4444"
                          : "var(--color-border)",
                        color: "var(--color-text)",
                      }}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputClasses}
                      style={{
                        borderColor: errors.email
                          ? "#ef4444"
                          : "var(--color-border)",
                        color: "var(--color-text)",
                      }}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    className={inputClasses}
                    style={{
                      borderColor: errors.message
                        ? "#ef4444"
                        : "var(--color-border)",
                      color: "var(--color-text)",
                      resize: "vertical",
                      minHeight: 100,
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="mb-3 text-sm text-red-500">
                    Something went wrong. Opening your email client as a
                    fallback...
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={status === "sending"}
                >
                  <Send size={16} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

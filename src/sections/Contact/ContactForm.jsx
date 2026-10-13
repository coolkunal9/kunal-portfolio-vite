import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { PERSONAL } from "../../data/content";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/[PLACEHOLDER_ENDPOINT]";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // If endpoint is a placeholder, direct to mailto immediately
    if (FORMSPREE_ENDPOINT.includes("[PLACEHOLDER")) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="p-6">
      {status === "sent" ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle2 size={36} className="text-[var(--color-success)] mb-3" />
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Message Initiated</h3>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Thank you for reaching out. Your message client has been opened or the form has been delivered.
          </p>
          <Button variant="secondary" size="sm" onClick={() => setStatus("idle")} className="mt-6">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <Input
            label="Your Name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Jane Doe"
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="e.g. jane@company.com"
            error={errors.email}
            required
          />

          <Textarea
            label="Message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your role or project..."
            error={errors.message}
            required
          />

          {status === "error" && (
            <div className="flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-error)]/30 bg-[var(--color-error-subtle)] p-3 text-xs text-[var(--color-error)]">
              <div className="flex items-center gap-2">
                <AlertCircle size={15} />
                <span>Form submission encountered an issue.</span>
              </div>
              <a
                href={`mailto:${PERSONAL.email}?subject=Portfolio Contact&body=${encodeURIComponent(form.message)}`}
                className="underline font-semibold"
              >
                Click here to send directly via mailto to {PERSONAL.email}
              </a>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={status === "sending"}
            icon={Send}
            iconPosition="right"
            className="w-full mt-2"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </Card>
  );
}

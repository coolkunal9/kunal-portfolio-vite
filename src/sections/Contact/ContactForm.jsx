import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { PERSONAL } from "../../data/content";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${PERSONAL.email}`;

function mailtoHref({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  return `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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
    if (form.website) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio inquiry from ${form.name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "", website: "" });
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="p-6">
      {status === "sent" ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle2 size={36} className="text-[var(--color-success)] mb-3" />
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Message sent</h3>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Thanks — I will reply to the email you provided.
          </p>
          <Button variant="secondary" size="sm" onClick={() => setStatus("idle")} className="mt-6">
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="relative space-y-4">
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

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
            placeholder="Role, timeline, or a question about the work."
            error={errors.message}
            required
          />

          {status === "error" && (
            <div className="flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-error)]/30 bg-[var(--color-error-subtle)] p-3 text-xs text-[var(--color-error)]">
              <div className="flex items-center gap-2">
                <AlertCircle size={15} />
                <span>The form could not be delivered from the browser.</span>
              </div>
              <a href={mailtoHref(form)} className="underline font-semibold">
                Open your email app instead
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
            {status === "sending" ? "Sending..." : "Send message"}
          </Button>
        </form>
      )}
    </Card>
  );
}

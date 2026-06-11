import { useState } from "react";
import { PERSONAL } from "../data";
import { useReveal } from "../hooks/useReveal";

function validate(form) {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
    if (!form.subject.trim()) errors.subject = "Subject is required";
    if (!form.message.trim()) errors.message = "Message is required";
    return errors;
}

export default function Contact() {
    const [ref, visible] = useReveal(0.1);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate(form);
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setErrors({});
        setStatus("sending");
        setTimeout(() => {
            setStatus("sent");
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        }, 1200);
    };

    const set = (k) => (e) => {
        setForm(s => ({ ...s, [k]: e.target.value }));
        if (errors[k]) setErrors(s => ({ ...s, [k]: undefined }));
    };

    const socials = [
        { icon: "⌨️", label: "GitHub", sub: "@coolkunal9", href: PERSONAL.github, color: "#f0f6ff" },
        { icon: "💼", label: "LinkedIn", sub: "Kunal Prasad", href: PERSONAL.linkedin, color: "#0a66c2" },
        { icon: "✉️", label: "Email", sub: PERSONAL.email, href: `mailto:${PERSONAL.email}`, color: "#63d2ff" },
        { icon: "📱", label: "Phone", sub: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`, color: "#34d399" },
        { icon: "💬", label: "WhatsApp", sub: "+91 9863126358", href: "https://wa.me/919863126358?text=Hi%20Kunal,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20role!", color: "#25d366" },
    ];

    const fieldStyle = (key) => ({
        width: "100%", background: "rgba(255,255,255,0.03)",
        border: `1px solid ${errors[key] ? "#f87171" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 10, padding: "12px 14px", color: "var(--text)",
        fontSize: 15, fontFamily: "var(--font-body)", outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
    });

    return (
        <section id="contact" style={{ padding: "110px 5% 80px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
                    <div className="section-label">Get In Touch</div>
                    <h2 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h2>
                    <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 500, marginBottom: 60, lineHeight: 1.75 }}>
                        I&apos;m actively seeking full-stack and frontend roles. Whether you have an opportunity, a project idea, or just want to say hello — my inbox is always open.
                    </p>
                </div>

                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36 }}>
                    {/* Left */}
                    <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-18px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                            {socials.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="glass-card"
                                    style={{ padding: "15px 18px", display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}15`, border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
                                        <div style={{ fontSize: 12, color: "var(--text-dim)", wordBreak: "break-all" }}>{s.sub}</div>
                                    </div>
                                    <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: 14 }}>↗</span>
                                </a>
                            ))}
                        </div>
                        <div style={{ background: "linear-gradient(135deg,rgba(99,210,255,0.07),rgba(167,139,250,0.07))", border: "1px solid rgba(99,210,255,0.14)", borderRadius: 16, padding: "24px 20px" }}>
                            <div style={{ fontSize: 26, marginBottom: 10 }}>🚀</div>
                            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 7 }}>Open to Full-Time Roles</h4>
                            <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 18 }}>Looking for full-stack, frontend, or MERN developer positions. Available Immediately.</p>
                            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>View LinkedIn ↗</a>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(18px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
                        <div className="glass-card" style={{ padding: "32px 28px" }}>
                            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 700, marginBottom: 26 }}>Send a Message</h3>

                            {status === "sent" ? (
                                <div style={{ textAlign: "center", padding: "48px 20px" }}>
                                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--accent-3)", marginBottom: 10 }}>Message Sent!</h4>
                                    <p style={{ fontSize: 15, color: "var(--text-dim)", lineHeight: 1.7 }}>Thanks for reaching out, {form.name || "there"}! I&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                                        {[{ k: "name", label: "Your Name", type: "text", ph: "John Doe" }, { k: "email", label: "Email Address", type: "email", ph: "you@example.com" }].map(f => (
                                            <div key={f.k}>
                                                <label style={{ display: "block", fontSize: 12, color: "var(--text-dim)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.04em" }}>{f.label}</label>
                                                <input type={f.type} placeholder={f.ph} value={form[f.k]} onChange={set(f.k)} style={fieldStyle(f.k)}
                                                    onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,210,255,0.1)" }}
                                                    onBlur={e => { e.target.style.borderColor = errors[f.k] ? "#f87171" : "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none" }}
                                                />
                                                {errors[f.k] && <p style={{ fontSize: 11, color: "#f87171", marginTop: 4 }}>⚠ {errors[f.k]}</p>}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginBottom: 14 }}>
                                        <label style={{ display: "block", fontSize: 12, color: "var(--text-dim)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.04em" }}>Subject</label>
                                        <input type="text" placeholder="Job opportunity / Project collaboration / Hello!" value={form.subject} onChange={set("subject")} style={fieldStyle("subject")}
                                            onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,210,255,0.1)" }}
                                            onBlur={e => { e.target.style.borderColor = errors.subject ? "#f87171" : "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none" }}
                                        />
                                        {errors.subject && <p style={{ fontSize: 11, color: "#f87171", marginTop: 4 }}>⚠ {errors.subject}</p>}
                                    </div>
                                    <div style={{ marginBottom: 24 }}>
                                        <label style={{ display: "block", fontSize: 12, color: "var(--text-dim)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.04em" }}>Message</label>
                                        <textarea placeholder="Tell me about the opportunity or project..." value={form.message} onChange={set("message")} rows={5}
                                            style={{ ...fieldStyle("message"), resize: "vertical", minHeight: 110 }}
                                            onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,210,255,0.1)" }}
                                            onBlur={e => { e.target.style.borderColor = errors.message ? "#f87171" : "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none" }}
                                        />
                                        {errors.message && <p style={{ fontSize: 11, color: "#f87171", marginTop: 4 }}>⚠ {errors.message}</p>}
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "13px" }} disabled={status === "sending"}>
                                        {status === "sending" ? "Sending…" : "Send Message →"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}
        @media(max-width:500px){.contact-grid form>div:first-child{grid-template-columns:1fr!important}}
      `}</style>
        </section>
    );
}

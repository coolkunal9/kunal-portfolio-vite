import { useState } from "react";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../data";
import { useReveal } from "../hooks/useReveal";


function TimelineItem({ item, index, visible }) {
    return (
        <div style={{ display: "flex", gap: 20, position: "relative", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)", transition: `opacity 0.55s ease ${index * 140}ms, transform 0.55s ease ${index * 140}ms` }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 40 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${item.color}15`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0, boxShadow: `0 0 16px ${item.color}25` }}>💼</div>
                {index < EXPERIENCE.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 28, background: "rgba(255,255,255,0.06)", margin: "7px 0" }} />}
            </div>
            <div className="glass-card" style={{ flex: 1, padding: "20px 24px", marginBottom: 18, borderRadius: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                    <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 3 }}>{item.role}</h3>
                        <div style={{ fontSize: 14, fontWeight: 600, color: item.color }}>{item.org}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: item.color, background: `${item.color}12`, border: `1px solid ${item.color}30`, borderRadius: 99, padding: "3px 11px" }}>{item.period}</span>
                </div>
                <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {item.points.map((pt, i) => (
                        <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6 }}>
                            <span style={{ color: item.color, flexShrink: 0, marginTop: 2 }}>▸</span>{pt}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


function CertBadge({ cert, visible, delay }) {
    const [hov, setHov] = useState(false);
    const Wrapper = cert.url ? "a" : "div";
    const linkProps = cert.url
        ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
        : {};
    return (
        <Wrapper
            {...linkProps}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: hov ? `${cert.color}10` : "rgba(255,255,255,0.02)",
                border: `1px solid ${hov ? cert.color + "40" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 12,
                padding: "12px 16px",
                cursor: cert.url ? "pointer" : "default",
                textDecoration: "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(16px)",
                transition: `all 0.22s ease, opacity 0.5s ease ${delay}ms`,
            }}
        >
            <div style={{ width: 36, height: 36, borderRadius: 9, background: `${cert.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{cert.icon}</div>
            <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>{cert.name}</div>
                <div style={{ fontSize: 11, color: cert.color, fontFamily: "var(--font-mono)" }}>{cert.issuer}{cert.url ? " · View credential" : ""}</div>
            </div>
        </Wrapper>
    );
}


export default function Experience() {
    const [ref, visible] = useReveal(0.05);
    return (
        <section id="journey" style={{ padding: "110px 5%", background: "rgba(10,15,30,0.5)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
                    <div className="section-label">My Journey</div>
                    <h2 className="section-title">Experience &amp; <span className="gradient-text">Education</span></h2>
                    <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 500, marginBottom: 60, lineHeight: 1.75 }}>
                        Four internships, a completed B.Tech, and countless late-night debugging sessions.
                    </p>
                </div>

                <div className="journey-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
                    {/* Work */}
                    <div>
                        <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 28 }}>Work Experience</h3>
                        {EXPERIENCE.map((item, i) => <TimelineItem key={i} item={item} index={i} visible={visible} />)}
                    </div>

                    {/* Education + Certs */}
                    <div>
                        <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 28 }}>Education</h3>
                        {EDUCATION.map((edu, i) => (
                            <div key={i} className="glass-card" style={{ padding: "24px", marginBottom: 36, borderRadius: 14, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s` }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                                    <div style={{ fontSize: 28, lineHeight: 1 }}>🎓</div>
                                    <div>
                                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{edu.degree}</h3>
                                        <div style={{ fontSize: 14, color: edu.color, fontWeight: 600, marginBottom: 3 }}>{edu.school}</div>
                                        <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{edu.location} · {edu.period}</div>
                                        <div style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--font-mono)", lineHeight: 1.6 }}>{edu.detail}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 18 }}>Certifications</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {CERTIFICATIONS.map((cert, i) => <CertBadge key={i} cert={cert} visible={visible} delay={i * 90 + 300} />)}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`@media(max-width:900px){.journey-grid{grid-template-columns:1fr!important;gap:56px!important}}`}</style>
        </section>
    );
}

import { useState } from "react";
import { SKILLS } from "../data";
import { useReveal } from "../hooks/useReveal";

function SkillChip({ skill }) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                display: "flex", alignItems: "center",
                padding: "12px 16px", borderRadius: 12, marginBottom: 10,
                background: hov ? "rgba(99,210,255,0.08)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${hov ? "rgba(99,210,255,0.35)" : "rgba(255,255,255,0.06)"}`,
                transition: "all 0.22s",
                transform: hov ? "translateX(4px)" : "translateX(0)",
                boxShadow: hov ? "0 4px 20px rgba(99,210,255,0.05)" : "none",
            }}
        >
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18, transition: "transform 0.2s", transform: hov ? "scale(1.1)" : "scale(1)" }}>{skill.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{skill.name}</span>
            </span>
        </div>
    );
}

function SkillColumn({ title, skills, visible, delay }) {
    return (
        <div className="glass-card" style={{
            padding: "28px 24px", flex: 1, minWidth: 280,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        }}>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 18, height: 1, background: "var(--accent)", display: "inline-block" }} />
                {title}
            </h3>
            {skills.map(skill => <SkillChip key={skill.name} skill={skill} />)}
        </div>
    );
}

export default function Skills() {
    const [ref, visible] = useReveal(0.1);
    return (
        <section id="skills" style={{ padding: "110px 5%", background: "rgba(10,15,30,0.6)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
                    <div className="section-label">Technical Expertise</div>
                    <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
                    <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 640, marginBottom: 44, lineHeight: 1.75 }}>
                        {SKILLS.summary}
                    </p>
                </div>

                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 36 }}>
                    <SkillColumn title="Frontend" skills={SKILLS.frontend} visible={visible} delay={100} />
                    <SkillColumn title="Backend" skills={SKILLS.backend} visible={visible} delay={220} />
                </div>

                {/* Tools */}
                <div className={`reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.35s" }}>
                    <div style={{ marginBottom: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        Tools & Platforms
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {SKILLS.tools.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                </div>

            </div>
        </section>
    );
}

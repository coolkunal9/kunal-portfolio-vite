import { useState } from "react";
import { PROJECTS } from "../data";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project, index }) {
    const [hov, setHov] = useState(false);
    const [ref, visible] = useReveal(0.08);
    return (
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s ease ${index * 110}ms, transform 0.6s ease ${index * 110}ms` }}>
            <div
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                    background: "var(--bg-card)", border: `1px solid ${hov ? project.accent + "40" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 20, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column",
                    transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.25s",
                    transform: hov ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
                    boxShadow: hov ? `0 20px 56px rgba(0,0,0,0.45), 0 0 32px ${project.accent}12` : "none",
                    position: "relative",
                }}
            >
                {/* top accent line */}
                <div style={{ height: 3, background: `linear-gradient(90deg,${project.accent},transparent)` }} />

                {/* inner glow */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 180, background: `radial-gradient(ellipse at top left,${project.accent}08,transparent 70%)`, pointerEvents: "none", opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />

                <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* header */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                        <div style={{ width: 50, height: 50, borderRadius: 13, background: `${project.accent}15`, border: `1px solid ${project.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, transition: "transform 0.3s", transform: hov ? "scale(1.12) rotate(-5deg)" : "scale(1)" }}>
                            {project.emoji}
                        </div>
                        {project.featured && (
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}30`, borderRadius: 99, padding: "3px 10px" }}>Featured</span>
                        )}
                    </div>

                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.05em", marginBottom: 6 }}>{project.short}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "var(--text)", marginBottom: 10, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{project.title}</h3>
                    <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 14 }}>{project.desc}</p>

                    {/* impact bullets */}
                    <ul style={{ paddingLeft: 0, margin: "0 0 18px", listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                        {project.bullets.map((b, i) => (
                            <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-dim)", lineHeight: 1.55 }}>
                                <span style={{ color: project.accent, flexShrink: 0, marginTop: 1 }}>▸</span>
                                {b}
                            </li>
                        ))}
                    </ul>

                    {/* tech chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                        {project.tech.map(t => (
                            <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 9px", borderRadius: 99, border: `1px solid ${project.accent}25`, background: `${project.accent}08`, color: project.accent, letterSpacing: "0.03em" }}>{t}</span>
                        ))}
                    </div>

                    {/* links */}
                    <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            style={{ flex: 1, textAlign: "center", padding: "9px", borderRadius: 10, border: `1px solid ${project.accent}30`, color: project.accent, fontSize: 13, fontWeight: 600, transition: "background 0.2s", background: hov ? `${project.accent}10` : "transparent" }}>
                            ⌨️ View Code
                        </a>
                        {project.live ? (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                style={{ flex: 1, textAlign: "center", padding: "9px", borderRadius: 10, background: project.accent, color: "#030712", fontSize: 13, fontWeight: 700 }}>
                                ↗ Live Demo
                            </a>
                        ) : (
                            <span style={{ flex: 1, textAlign: "center", padding: "9px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", color: "var(--text-muted)", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Coming Soon
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [ref, visible] = useReveal();
    const displayed = showAll ? PROJECTS : PROJECTS.filter(p => p.featured);

    return (
        <section id="projects" style={{ padding: "110px 5%" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
                    <div className="section-label">What I&apos;ve Built</div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
                        <div>
                            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                            <p style={{ color: "var(--text-dim)", fontSize: 16, maxWidth: 460, lineHeight: 1.7 }}>Real-world apps — from AI tools to full e-commerce platforms, each with measurable impact.</p>
                        </div>
                        <a href="https://github.com/coolkunal9" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flexShrink: 0, fontSize: 14 }}>All Repos ↗</a>
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 22, marginBottom: 36 }}>
                    {displayed.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
                </div>

                {!showAll && (
                    <div style={{ textAlign: "center" }}>
                        <button className="btn-outline" onClick={() => setShowAll(true)} style={{ margin: "0 auto" }}>
                            Show {PROJECTS.length - displayed.length} More Projects ↓
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

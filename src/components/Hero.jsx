import { useState, useEffect, useRef } from "react";
import { PERSONAL } from "../data";

/* ─── Particle canvas ─── */
function ParticleField() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);
        const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
        window.addEventListener("resize", onResize);
        const pts = Array.from({ length: 55 }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
            r: Math.random() * 1.4 + 0.3, a: Math.random() * 0.35 + 0.08,
        }));
        let raf;
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99,210,255,${p.a})`; ctx.fill();
            });
            for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
                if (d < 110) { ctx.beginPath(); ctx.strokeStyle = `rgba(99,210,255,${0.05 * (1 - d / 110)})`; ctx.lineWidth = 0.5; ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
            }
            raf = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
    }, []);
    return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

/* ─── Typewriter ─── */
function Typewriter({ words }) {
    const [idx, setIdx] = useState(0);
    const [chars, setChars] = useState(0);
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        const word = words[idx]; let t;
        if (!deleting && chars < word.length) t = setTimeout(() => setChars(c => c + 1), 75);
        else if (!deleting && chars === word.length) t = setTimeout(() => setDeleting(true), 2200);
        else if (deleting && chars > 0) t = setTimeout(() => setChars(c => c - 1), 40);
        else { setDeleting(false); setIdx(i => (i + 1) % words.length); }
        return () => clearTimeout(t);
    }, [chars, deleting, idx, words]);
    return (
        <span style={{ color: "var(--accent)" }}>
            {words[idx].slice(0, chars)}
            <span style={{ borderRight: "2px solid var(--accent)", marginLeft: 1, animation: "blink 1s step-end infinite" }} />
        </span>
    );
}

/* ─── Hero ─── */
export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

    const fi = (delay, extra = {}) => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...extra,
    });

    const socials = [
        { icon: "⌨️", label: "GitHub", href: PERSONAL.github },
        { icon: "💼", label: "LinkedIn", href: PERSONAL.linkedin },
        { icon: "🎓", label: "GeeksforGeeks", href: PERSONAL.geeksforgeeks },
        { icon: "✉️", label: "Email", href: `mailto:${PERSONAL.email}` },
    ];

    return (
        <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 5% 60px", position: "relative", overflow: "hidden" }}>
            <ParticleField />

            {/* ambient glows */}
            <div style={{ position: "absolute", top: "18%", right: "6%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,210,255,0.07) 0%,transparent 70%)", pointerEvents: "none", animation: "float 8s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: "12%", left: "4%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(167,139,250,0.06) 0%,transparent 70%)", pointerEvents: "none", animation: "float 11s ease-in-out infinite 2s" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", zIndex: 1, display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap" }}>

                {/* ── LEFT ── */}
                <div style={{ flex: 1, minWidth: 300 }}>

                    {/* badge */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 99, padding: "7px 16px", marginBottom: 28, ...fi(0.1) }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", display: "inline-block", animation: "pulse-ring 1.5s infinite" }} />
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#34d399", letterSpacing: "0.06em", fontWeight: 500 }}>
                            {PERSONAL.badge}
                        </span>
                    </div>

                    {/* name */}
                    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px,5.5vw,72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 18, ...fi(0.2) }}>
                        Hi, I&apos;m<br />
                        <span className="gradient-text">Kunal Prasad</span>
                    </h1>

                    {/* typewriter */}
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(15px,2vw,20px)", marginBottom: 24, height: 30, ...fi(0.32) }}>
                        <span style={{ color: "var(--text-dim)" }}>{"// "}</span>
                        <Typewriter words={PERSONAL.roles} />
                    </div>

                    {/* bio */}
                    <p style={{ fontSize: 16, color: "var(--text-dim)", lineHeight: 1.8, maxWidth: 540, marginBottom: 36, ...fi(0.42) }}>
                        {PERSONAL.about}
                    </p>

                    {/* CTAs */}
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", ...fi(0.52) }}>
                        <button className="btn-primary" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
                            View My Work →
                        </button>
                        <a href={PERSONAL.resumeUrl} download="Kunal_Prasad_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                            Download Resume 📄
                        </a>
                        <a href={`mailto:${PERSONAL.email}`} className="btn-outline">
                            Hire Me ✉️
                        </a>
                    </div>

                    {/* icon-only social links */}
                    <div style={{ display: "flex", gap: 10, marginTop: 36, ...fi(0.62) }}>
                        {socials.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                title={s.label}
                                style={{
                                    width: 40, height: 40, borderRadius: 10,
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 18, color: "var(--text-dim)",
                                    transition: "border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(99,210,255,0.07)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "transparent"; }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: avatar + stats ── */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0.9)", transition: "opacity 0.8s ease 0.3s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s" }}>
                    {/* spinning ring + avatar */}
                    <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", inset: -10, borderRadius: "50%", background: "conic-gradient(from 0deg,var(--accent),var(--accent-2),var(--accent-3),var(--accent))", animation: "spin-slow 6s linear infinite", padding: 2 }}>
                            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg)" }} />
                        </div>
                        <img src={PERSONAL.avatar} alt="Kunal Prasad"
                            style={{ width: 210, height: 210, borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 1, border: "4px solid var(--bg)" }}
                            onError={e => { e.target.style.display = "none"; if (e.target.nextSibling) e.target.nextSibling.style.display = "flex"; }}
                        />
                        <div style={{ display: "none", width: 210, height: 210, borderRadius: "50%", background: "linear-gradient(135deg,var(--accent),var(--accent-2))", alignItems: "center", justifyContent: "center", fontSize: 68, position: "relative", zIndex: 1, border: "4px solid var(--bg)" }}>👨‍💻</div>
                    </div>

                    {/* stat cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        {PERSONAL.stats.map((stat, i) => (
                            <div key={i} className="glass-card" style={{ padding: "14px 18px", textAlign: "center", borderRadius: 12, animation: `fadeUp 0.5s ease ${0.5 + i * 0.1}s both`, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--accent)" }}>{stat.value}</div>
                                <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 3 }}>{stat.label}</div>
                                {stat.subLabel && <div style={{ fontSize: 9, color: "var(--text-muted)", marginTop: 2, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.subLabel}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* scroll indicator */}
            <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: mounted ? 0.45 : 0, transition: "opacity 1s ease 1.5s" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.12em" }}>SCROLL</span>
                <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,var(--accent),transparent)", animation: "float 2s ease-in-out infinite" }} />
            </div>

            <style>{`@media(max-width:900px){#about>div>div:last-child{display:none!important}}`}</style>
        </section>
    );
}

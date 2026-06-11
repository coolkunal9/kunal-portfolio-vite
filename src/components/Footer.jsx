import { PERSONAL, NAV_LINKS } from "../data";

export default function Footer() {
    const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    const socials = [
        { icon: "⌨️", label: "GitHub", href: PERSONAL.github },
        { icon: "💼", label: "LinkedIn", href: PERSONAL.linkedin },
        { icon: "🎓", label: "GeeksforGeeks", href: PERSONAL.geeksforgeeks },
        { icon: "✉️", label: "Email", href: `mailto:${PERSONAL.email}` },
    ];

    return (
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 5% 28px", background: "rgba(3,7,18,0.85)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>

                {/* Brand */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 19, fontWeight: 600 }}>
                        <span style={{ color: "var(--accent)" }}>&lt;</span>KP<span style={{ color: "var(--accent)" }}>/&gt;</span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
                        Full Stack Developer · MERN · Jaipur, India
                    </p>
                    {/* icon-only socials */}
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                        {socials.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                                style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "var(--text-muted)", transition: "border-color 0.2s, color 0.2s, transform 0.2s" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >{s.icon}</a>
                        ))}
                    </div>
                </div>

                {/* Nav */}
                <nav style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {NAV_LINKS.map(l => (
                        <button key={l.href} onClick={() => scrollTo(l.href)}
                            style={{ fontSize: 13, color: "var(--text-muted)", padding: "5px 10px", borderRadius: 6, fontFamily: "var(--font-body)", transition: "color 0.2s, background 0.2s" }}
                            onMouseEnter={e => { e.target.style.color = "var(--accent)"; e.target.style.background = "rgba(99,210,255,0.06)"; }}
                            onMouseLeave={e => { e.target.style.color = "var(--text-muted)"; e.target.style.background = "transparent"; }}
                        >{l.label}</button>
                    ))}
                </nav>
            </div>

            {/* Bottom bar */}
            <div style={{ maxWidth: 1200, margin: "24px auto 0", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>© {new Date().getFullYear()} Kunal Prasad. All rights reserved.</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>Built with <span style={{ color: "#61dafb" }}>React</span> + <span style={{ color: "#646cff" }}>Vite</span></span>
            </div>
        </footer>
    );
}

import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "../data";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = NAV_LINKS.map(l => document.querySelector(l.href));
            const y = window.scrollY + 120;
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].offsetTop <= y) {
                    setActive(NAV_LINKS[i].href);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <header style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
                padding: "0 5%", height: 68,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
                background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(24px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
            }}>
                {/* Logo */}
                <button onClick={() => scrollTo("#about")}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em" }}>
                    <span style={{ color: "var(--accent)" }}>&lt;</span>
                    KP
                    <span style={{ color: "var(--accent)" }}>/&gt;</span>
                </button>

                {/* Desktop Nav */}
                <nav style={{ display: "flex", gap: 4 }} className="desktop-nav">
                    {NAV_LINKS.map(link => (
                        <button key={link.href} onClick={() => scrollTo(link.href)}
                            style={{
                                padding: "8px 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                                color: active === link.href ? "var(--accent)" : "var(--text-dim)",
                                background: active === link.href ? "rgba(99,210,255,0.08)" : "transparent",
                                transition: "color 0.2s, background 0.2s",
                                fontFamily: "var(--font-body)",
                            }}
                            onMouseEnter={e => { if (active !== link.href) e.target.style.color = "var(--text)"; }}
                            onMouseLeave={e => { if (active !== link.href) e.target.style.color = "var(--text-dim)"; }}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <a href={PERSONAL.resumeUrl} download="Kunal_Prasad_Resume.pdf" target="_blank" rel="noopener noreferrer"
                        className="btn-outline desktop-action" style={{ padding: "8px 18px", fontSize: 13, borderRadius: 8, borderColor: "rgba(52,211,153,0.3)", color: "#34d399" }}>
                        Resume 📄
                    </a>
                    <a href={PERSONAL.github} target="_blank" rel="noopener"
                        className="btn-outline desktop-action" style={{ padding: "8px 18px", fontSize: 13, borderRadius: 8 }}>
                        GitHub ↗
                    </a>
                    {/* Hamburger */}
                    <button className="hamburger" onClick={() => setMenuOpen(m => !m)}
                        style={{ display: "none", flexDirection: "column", gap: 5, padding: 8 }}>
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: "block", width: 22, height: 2, background: "var(--text)",
                                borderRadius: 2, transition: "all 0.3s",
                                transform: menuOpen
                                    ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)")
                                    : "none",
                                opacity: menuOpen && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            <div style={{
                position: "fixed", top: 68, left: 0, right: 0, zIndex: 499,
                background: "rgba(3,7,18,0.97)", backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: menuOpen ? "24px 5% 32px" : "0 5%",
                maxHeight: menuOpen ? "460px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), padding 0.3s",
                display: "flex", flexDirection: "column", gap: 4,
            }}>
                {NAV_LINKS.map(link => (
                    <button key={link.href} onClick={() => scrollTo(link.href)}
                        style={{
                            padding: "14px 0", fontSize: 20, fontWeight: 600, textAlign: "left",
                            color: active === link.href ? "var(--accent)" : "var(--text-dim)",
                            fontFamily: "var(--font-display)",
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}>
                        {link.label}
                    </button>
                ))}
                <a href={PERSONAL.resumeUrl} download="Kunal_Prasad_Resume.pdf" target="_blank" rel="noopener noreferrer"
                    className="btn-outline" style={{ display: "block", textAlign: "center", marginTop: 16, padding: "12px 0", borderRadius: 8, color: "#34d399", borderColor: "rgba(52,211,153,0.3)", fontSize: 16, fontWeight: 600 }}>
                    Download Resume 📄
                </a>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                    className="btn-outline" style={{ display: "block", textAlign: "center", marginTop: 10, padding: "12px 0", borderRadius: 8, color: "var(--text)", borderColor: "rgba(255,255,255,0.08)", fontSize: 16, fontWeight: 600 }}>
                    GitHub Profile ↗
                </a>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-action { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
        </>
    );
}

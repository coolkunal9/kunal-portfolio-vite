import { PERSONAL } from "../data/content";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "../components/Icons";

export default function Footer() {
  const socials = [
    { icon: Github, label: "GitHub", href: PERSONAL.github },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${PERSONAL.email}` },
  ];

  return (
    <footer
      className="border-t px-6 py-8"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left: name */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm font-semibold">
            <span style={{ color: "var(--color-accent)" }}>{"<"}</span>
            KP
            <span style={{ color: "var(--color-accent)" }}>{"/>"}</span>
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            {PERSONAL.name} · {PERSONAL.location}
          </span>
        </div>

        {/* Center: socials */}
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="flex h-8 w-8 items-center justify-center rounded-md transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-accent)";
                e.currentTarget.style.background = "var(--color-accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Right: copyright */}
        <span
          className="font-mono text-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          © {new Date().getFullYear()} Kunal Prasad
        </span>
      </div>
    </footer>
  );
}

import { PERSONAL } from "../../data/content";
import Card from "../../components/ui/Card";
import { Mail, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "../../components/ui/Icons";

export default function ContactInfo() {
  const channels = [
    {
      title: "Direct Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      icon: Mail,
      isExternal: false,
    },
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/kunalprasaddev",
      href: PERSONAL.linkedin,
      icon: Linkedin,
      isExternal: true,
    },
    {
      title: "GitHub Repository",
      value: "github.com/coolkunal9",
      href: PERSONAL.github,
      icon: Github,
      isExternal: true,
    },
  ];

  return (
    <div className="space-y-4">
      {channels.map((ch) => (
        <a
          key={ch.title}
          href={ch.href}
          target={ch.isExternal ? "_blank" : undefined}
          rel={ch.isExternal ? "noopener noreferrer" : undefined}
          className="block group"
        >
          <Card interactive className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--accent-text)]">
                <ch.icon size={16} />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] block">
                  {ch.title}
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors">
                  {ch.value}
                </span>
              </div>
            </div>
            {ch.isExternal && (
              <ExternalLink
                size={14}
                className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors"
              />
            )}
          </Card>
        </a>
      ))}
    </div>
  );
}

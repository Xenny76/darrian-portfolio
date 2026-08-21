import { Section } from "./About";
import GithubHeatmap from "./GithubHeatmap";

const links = [
  { label: "Email", value: "darrian.redford04@gmail.com", href: "mailto:darrian.redford04@gmail.com" },
  { label: "GitHub", value: "github.com/Xenny76", href: "https://github.com/Xenny76" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/darrian-redford-dev",
    href: "https://www.linkedin.com/in/darrian-redford-dev/",
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="// 04. contact" title="Contact">
      <p className="max-w-xl text-[var(--text-muted)]">
        Open to internship and entry-level backend/full-stack roles. Have a project in mind or
        just want to say hi? My inbox is open.
      </p>
      <ul className="mt-6 flex flex-col gap-3 font-mono text-sm">
        {links.map((link) => (
          <li key={link.label} className="flex gap-3">
            <span className="w-20 flex-none text-[var(--red)]">{link.label}</span>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="min-w-0 break-all text-[var(--cyan)] underline underline-offset-2"
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>
      <GithubHeatmap />
    </Section>
  );
}

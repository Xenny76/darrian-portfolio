const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-[var(--text)]">
          <span className="text-[var(--cyan)]">~/</span>darrian
        </a>
        <ul className="hidden items-center gap-7 font-mono text-sm text-[var(--text-muted)] sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-[var(--cyan)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume"
          className="rounded-md border border-[var(--border)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
        >
          resume
        </a>
      </nav>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 font-mono text-xs text-[var(--text-muted)]">
        <span>© {new Date().getFullYear()} Darrian Redford</span>
        <a href="#top" className="transition-colors hover:text-[var(--cyan)]">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}

import { Section } from "./About";
import { projects } from "@/data/projects";

const statusColor: Record<string, string> = {
  capstone: "text-[var(--cyan)] border-[var(--cyan)]/40",
  "in progress": "text-[var(--cyan)] border-[var(--cyan)]/40",
  "team project": "text-[var(--red-ink)] border-[var(--red)]/60 bg-[var(--red-soft)]",
};

export default function Projects() {
  return (
    <Section id="projects" eyebrow="// 03. projects" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--cyan)]/50"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold">{project.title}</h3>
              <span
                className={`flex-none rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)] ${
                  statusColor[project.statusLabel] ?? "border-[var(--border)]"
                }`}
              >
                {project.statusLabel}
              </span>
            </div>

            <p className="text-sm text-[var(--text-muted)]">{project.description}</p>

            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-2">
              {project.private ? (
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  private repo
                </span>
              ) : (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--cyan)] underline underline-offset-2"
                >
                  {project.externalOwner ? "view team repo" : "view code"} ↗
                </a>
              )}
              {project.externalOwner && (
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  w/ {project.externalOwner}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

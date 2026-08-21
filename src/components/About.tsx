function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full min-w-0 max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="font-mono text-sm text-[var(--cyan)]">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="// 01. about" title="About">
      <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-4 text-[var(--text-muted)]">
          <p>
            I&apos;m a Computer Science student at Neumont University (BSCS, 4.0 GPA) who builds
            full-stack software with a backend lean. Most of my recent work is C#/.NET, but I move
            comfortably across Java, Python, and JavaScript depending on what the problem actually
            calls for.
          </p>
          <p>
            I&apos;ve shipped features in a production SaaS environment, tested and documented
            live API endpoints, and built out microservice architectures from scratch for
            coursework capstones: appointment booking, catalog services, API gateways. The kind
            of plumbing that has to actually hold together under real use, not just in a demo.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-inset)] p-5 font-mono text-sm">
          <p className="text-[var(--text-muted)]">$ whoami</p>
          <dl className="mt-3 flex flex-col gap-2">
            {[
              ["location", "Salt Lake City, UT"],
              ["focus", "Backend / Full-Stack Development"],
              ["availability", "Open to internship & entry-level roles"],
              ["education", "Neumont University, BSCS, 4.0 GPA"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <dt className="text-[var(--red)]">{k}:</dt>
                <dd className="text-[var(--text-muted)]">{v}</dd>
              </div>
            ))}
            <div className="flex gap-2">
              <dt className="text-[var(--red)]">resume</dt>
              <dd>
                <a href="/resume" className="text-[var(--cyan)] underline underline-offset-2">
                  view
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}

export { Section };

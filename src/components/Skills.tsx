import { Section } from "./About";

const groups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["C#", "Java", "Python", "JavaScript", "SQL"] },
  {
    label: "Backend & Frameworks",
    items: [".NET", "ASP.NET", "Blazor", ".NET MAUI", "Spring Boot", "Node.js", "REST APIs"],
  },
  { label: "Frontend", items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "WordPress"] },
  {
    label: "Databases & Infra",
    items: ["SQL Server", "MongoDB", "Neo4j", "Redis", "Docker", "Kubernetes"],
  },
  {
    label: "Tools & Practice",
    items: ["Git", "GitHub", "Figma", "Agile Planning", "Debugging"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// 02. skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--red)]">
              {group.label}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-[var(--text-muted)]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

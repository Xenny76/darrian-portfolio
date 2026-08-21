export default function GithubHeatmap() {
  return (
    <div className="mt-10">
      <p className="font-mono text-xs uppercase tracking-wide text-[var(--red)]">
        GitHub Activity
      </p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--bg-inset)] p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/00f6ff/Xenny76"
          alt="Darrian Redford's GitHub contribution graph"
          className="w-[663px] max-w-none"
        />
      </div>
    </div>
  );
}

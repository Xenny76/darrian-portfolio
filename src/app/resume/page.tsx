import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Darrian Redford",
};

export default function ResumePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <a
        href="/"
        className="w-fit rounded-md border border-[var(--border)] px-4 py-2 font-mono text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
      >
        ← back to home
      </a>
      <h1 className="text-4xl font-extrabold tracking-tight">Resume</h1>
      <div className="flex flex-wrap gap-3">
        <a
          href="/Darrian_Redford_Resume.pdf"
          download
          className="w-fit rounded-md bg-[var(--cyan)] px-5 py-2.5 font-mono text-sm font-medium text-[#021012] shadow-[var(--glow)] transition-transform hover:scale-[1.02]"
        >
          download resume (.pdf) →
        </a>
        <a
          href="/Darrian_Redford_Resume.docx"
          download
          className="w-fit rounded-md border border-[var(--border)] px-5 py-2.5 font-mono text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
        >
          download (.docx)
        </a>
      </div>
      <div className="mt-2 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-inset)]">
        <object
          data="/Darrian_Redford_Resume.pdf"
          type="application/pdf"
          className="h-[calc(100vh-20rem)] min-h-[600px] w-full"
        >
          <p className="p-6 text-sm text-[var(--text-muted)]">
            Your browser can&apos;t preview PDFs inline.{" "}
            <a href="/Darrian_Redford_Resume.pdf" className="text-[var(--cyan)] underline">
              Download it instead
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  );
}

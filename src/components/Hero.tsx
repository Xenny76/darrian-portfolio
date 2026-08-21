"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "backend systems that hold up.",
  "full-stack tools people actually use.",
  "APIs worth building on.",
];

function useTypewriter(words: string[], typingMs = 55, holdMs = 1800, deletingMs = 30) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingMs);
      } else {
        timeout = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), holdMs);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingMs);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, phase, wordIndex]);

  return text;
}

export default function Hero() {
  const roleText = useTypewriter(ROLES);

  return (
    <section id="top" className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 pb-24 pt-16 sm:pt-24">
      <div className="flex flex-col gap-4">
        <p className="font-mono text-sm text-[var(--cyan)] text-glow">// currently building</p>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Darrian Redford
          <br />
          <span className="block min-h-[3.2em] sm:min-h-[2.15em]">
            <span className="text-[var(--cyan)] text-glow">{roleText}</span>
            <span
              aria-hidden
              className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-[var(--cyan)] align-middle text-glow motion-safe:animate-pulse"
            />
          </span>
        </h1>
        <p className="max-w-xl text-lg text-[var(--text-muted)]">
          Full-stack engineer with a backend lean. Mostly C#/.NET, Java, and JavaScript across
          production SaaS, microservices, and the occasional WordPress site. I like owning a
          feature end to end: schema to API to the thing a user actually clicks.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-[var(--cyan)] px-5 py-2.5 font-mono text-sm font-medium text-[#021012] shadow-[var(--glow)] transition-transform hover:scale-[1.02]"
          >
            view projects →
          </a>
          <a
            href="#contact"
            className="rounded-md bg-[var(--red)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--red-ink)] transition-transform hover:scale-[1.02]"
          >
            get in touch
          </a>
        </div>
      </div>

      <CommandPromptWindow />
    </section>
  );
}

function CommandPromptWindow() {
  return (
    <div className="max-w-xl overflow-hidden rounded-lg border border-[var(--border)] shadow-2xl">
      <div className="flex h-8 items-center gap-2 bg-[#1d1d1d] px-2.5 font-sans text-xs text-[#d8d8d8]">
        <span className="h-3.5 w-3.5 flex-none border border-[#d8d8d8] bg-[var(--cmd-bg)]" />
        <span className="flex-1 opacity-85">Command Prompt</span>
        <div className="flex h-full">
          <span className="flex h-full w-11 items-center justify-center opacity-75">—</span>
          <span className="flex h-full w-11 items-center justify-center opacity-75">▢</span>
          <span className="flex h-full w-11 items-center justify-center opacity-75 hover:bg-[#c42b1c] hover:text-white hover:opacity-100">
            ✕
          </span>
        </div>
      </div>
      <div className="bg-[var(--cmd-bg)] px-4.5 py-4 font-mono text-sm leading-7 text-[#cbcbcb]">
        <div>
          <span>C:\Users\Guest&gt;</span> whoami
        </div>
        <div className="text-[var(--cyan)] text-glow">darrian</div>
        <div className="mt-1.5">
          <span>C:\Users\Guest&gt;</span> status --check availability
        </div>
        <div>
          <span className="rounded-[2px] bg-[var(--cyan)] px-1.5 py-0.5 text-[#021012]">OPEN</span>{" "}
          <span className="text-[#7a7a7a]">actively looking for internship/entry-level roles</span>
        </div>
        <div className="mt-1.5">
          <span>C:\Users\Guest&gt;</span>
          <span
            aria-hidden
            className="ml-1 inline-block h-[1em] w-2 translate-y-[3px] bg-[var(--cyan)] shadow-[var(--glow)] motion-safe:animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}

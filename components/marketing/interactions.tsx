"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon, Mark } from "./icons";
import s from "./marketing.module.css";

const links = [
  { href: "#templates", label: "Templates" },
  { href: "/docs/installation", label: "Documentation" },
  { href: "/blog", label: "Journal" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={s.header}>
      <Link href="/" className={s.brand} aria-label="ConvertFast home">
        <Mark />
        <span>
          ConvertFast<span className={s.brandDot}>.</span>
        </span>
      </Link>
      <nav className={s.desktopNav} aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a
        className={s.githubLink}
        href="https://github.com/ObservedObserver/convertfast-ui"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
      <button
        className={s.menuButton}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "×" : "+"}</span>
      </button>
      {open && (
        <nav
          className={s.mobileNav}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowIcon />
            </Link>
          ))}
          <a href="https://github.com/ObservedObserver/convertfast-ui">
            GitHub <ArrowIcon />
          </a>
        </nav>
      )}
    </header>
  );
}

export function CopyCommand({
  command,
  compact = false,
}: {
  command: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setState("copied");
    } catch {
      setState("error");
    }
  }
  return (
    <div className={`${s.copyCommand} ${compact ? s.compactCommand : ""}`}>
      <code>
        <span aria-hidden="true">$ </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy command: ${command}`}
      >
        {state === "copied" ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path d="M15 8V4H4v11h4" />
          </svg>
        )}
        <span>{state === "copied" ? "Copied" : "Copy"}</span>
      </button>
      <span
        className={state === "error" ? s.copyError : s.srOnly}
        role="status"
      >
        {state === "copied"
          ? "Command copied to clipboard."
          : state === "error"
            ? "Could not copy. Select the command to copy it manually."
            : ""}
      </span>
    </div>
  );
}

export function TemplatePreview() {
  const [style, setStyle] = useState<"default" | "editorial">("editorial");
  const [width, setWidth] = useState<"desktop" | "mobile">("desktop");
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  function changeStyle(next: "default" | "editorial") {
    if (next !== style) setReady(false);
    setStyle(next);
  }
  return (
    <div className={s.preview}>
      <div className={s.previewToolbar}>
        <div
          className={s.segmentControl}
          role="group"
          aria-label="Template style"
        >
          <button
            type="button"
            aria-pressed={style === "editorial"}
            onClick={() => changeStyle("editorial")}
          >
            Editorial
          </button>
          <button
            type="button"
            aria-pressed={style === "default"}
            onClick={() => changeStyle("default")}
          >
            Default
          </button>
        </div>
        <div
          className={s.deviceControl}
          role="group"
          aria-label="Preview width"
        >
          <button
            type="button"
            aria-pressed={width === "desktop"}
            onClick={() => setWidth("desktop")}
            aria-label="Desktop preview"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="13" rx="2" />
              <path d="M8 21h8m-4-5v5" />
            </svg>
          </button>
          <button
            type="button"
            aria-pressed={width === "mobile"}
            onClick={() => setWidth("mobile")}
            aria-label="Mobile preview"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="6" y="2" width="12" height="20" rx="2" />
              <path d="M10 18h4" />
            </svg>
          </button>
        </div>
        <a
          className={s.previewNewTab}
          href={`/demo/${style}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open preview <span aria-hidden="true">↗</span>
          <span className={s.srOnly}> in a new tab</span>
        </a>
      </div>
      <div
        className={`${s.previewStage} ${width === "mobile" ? s.mobileStage : ""}`}
      >
        {loaded ? (
          <>
            {!ready && (
              <span className={s.loading} role="status">
                Loading {style} preview…
              </span>
            )}
            <iframe
              key={style}
              src={`/demo/${style}`}
              title={`${style === "editorial" ? "Editorial" : "Default"} landing page template. All content is fictional example content.`}
              className={s.previewFrame}
              onLoad={() => setReady(true)}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </>
        ) : (
          <div className={s.previewPlaceholder}>
            <div className={s.previewSketch} aria-hidden="true">
              <div />
              <div />
              <div />
              <span />
              <span />
              <span />
            </div>
            <span className={s.eyebrow}>
              A starting point for your next page
            </span>
            <h3>
              {style === "editorial"
                ? "A little more editorial."
                : "A familiar foundation."}
            </h3>
            <p>
              {style === "editorial"
                ? "Explore the layout, spacing, and typography in the editorial template."
                : "Explore the classic SaaS layout in the default template."}
            </p>
            <button
              type="button"
              className={s.primaryButton}
              onClick={() => {
                setLoaded(true);
                setReady(false);
              }}
            >
              Load interactive preview <ArrowIcon />
            </button>
          </div>
        )}
      </div>
      <div className={s.previewCaption}>
        <span>
          <span className={s.statusDot} />
          {style} / 7 sections
        </span>
        <span>
          Example content. Replace it with your own before publishing.
        </span>
      </div>
    </div>
  );
}

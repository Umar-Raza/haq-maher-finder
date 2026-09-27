"use client";

import { useState, useRef, useEffect } from "react";
import { languages } from "@/config/languages";
import { useLanguage } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm text-muted hover:text-foreground hover:bg-surface transition-colors"
        aria-label={t.common.changeLanguage}
        aria-expanded={open}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="hidden sm:inline">
          {languages[locale]?.nativeName}
        </span>
      </button>

      {open && (
        <div className="absolute end-0 top-full z-50 mt-1 min-w-[160px] rounded-lg border border-border bg-surface py-1 shadow-lg">
          {Object.values(languages).map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code as "en" | "ar" | "ur");
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-background ${
                locale === lang.code
                  ? "text-[var(--color-primary)] font-medium"
                  : "text-foreground"
              }`}
              dir={lang.direction}
            >
              <span>{lang.nativeName}</span>
              <span className="text-muted text-xs">({lang.name})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

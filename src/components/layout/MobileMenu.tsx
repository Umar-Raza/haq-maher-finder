"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const t = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 end-0 w-full max-w-xs bg-surface shadow-xl">
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <span className="text-sm font-semibold text-foreground">
            {t.common.menu}
          </span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted hover:text-foreground transition-colors"
            aria-label={t.common.closeMenu}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-background"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </div>
  );
}

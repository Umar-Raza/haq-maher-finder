"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { useTranslation } from "@/lib/i18n";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslation();

  const navLinks = [
    { href: "/haq-mehr-calculator", label: t.nav.calculator },
    { href: "/silver-rate", label: t.nav.silverRate },
    { href: "/guides", label: t.nav.guides },
    { href: "/faq", label: t.nav.faq },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-foreground"
          >
            <span className="text-[var(--color-accent)]">&#9670;</span>
            <span>
              {t.common.siteName.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[var(--color-primary)]">
                {t.common.siteName.split(" ").slice(-1)}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground hover:bg-background"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-1">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-muted hover:text-foreground hover:bg-surface transition-colors md:hidden"
              aria-label={t.common.openMenu}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}

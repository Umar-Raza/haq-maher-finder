"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const t = useTranslation();

  const calculatorLinks = [
    { href: "/haq-mehr-calculator", label: t.footer.haqMehrCalculator },
    { href: "/silver-rate", label: t.footer.silverRate },
  ];

  const resourceLinks = [
    { href: "/guides", label: t.footer.guides },
    { href: "/faq", label: t.footer.faq },
    { href: "/about", label: t.footer.about },
    { href: "/contact", label: t.footer.contact },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: t.footer.privacyPolicy },
    { href: "/terms", label: t.footer.termsOfService },
    { href: "/disclaimer", label: t.footer.disclaimer },
  ];

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-bold text-foreground">
              <span className="text-[var(--color-accent)]">&#9670;</span>{" "}
              {t.common.siteName}
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.calculator}
            </h3>
            <ul className="mt-3 space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.resources}
            </h3>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.legal}
            </h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const t = useTranslation();

  return (
    <>
      <Section className="flex items-center">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wide">
              {t.home.badge}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.home.title}{" "}
              <span className="text-[var(--color-primary)]">
                {t.home.titleHighlight}
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed sm:text-xl">
              {t.home.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/haq-mehr-calculator"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--color-primary-light)] sm:w-auto"
              >
                {t.home.cta}
              </Link>
              <Link
                href="/guides"
                className="inline-flex w-full items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface sm:w-auto"
              >
                {t.home.learnMore}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t.home.howItWorks}
            </h2>
            <p className="mt-2 text-muted">{t.home.howItWorksSubtitle}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-lg font-bold">
                1
              </div>
              <h3 className="mt-4 font-semibold">{t.home.step1Title}</h3>
              <p className="mt-2 text-sm text-muted">{t.home.step1Desc}</p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-lg font-bold">
                2
              </div>
              <h3 className="mt-4 font-semibold">{t.home.step2Title}</h3>
              <p className="mt-2 text-sm text-muted">{t.home.step2Desc}</p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-lg font-bold">
                3
              </div>
              <h3 className="mt-4 font-semibold">{t.home.step3Title}</h3>
              <p className="mt-2 text-sm text-muted">{t.home.step3Desc}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t.home.trustTitle}
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              {t.home.trustDesc}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export const siteConfig = {
  name: "Haq Mehr Finder",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://haqmehrfinder.com",
  description:
    "Calculate your Haq Mehr (Mahr) based on current silver rates. Supports multiple currencies, units, and languages.",
  defaultLocale: "en" as const,
  locales: ["en", "ar", "ur"] as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];

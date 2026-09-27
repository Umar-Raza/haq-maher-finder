import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    ...overrides,
  };
}

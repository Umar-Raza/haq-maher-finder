export interface RegionConfig {
  slug: string;
  name: string;
  currency: string;
  silverUnit: string;
  rateUnit: string;
}

export const regions: Record<string, RegionConfig> = {
  pakistan: {
    slug: "pakistan",
    name: "Pakistan",
    currency: "PKR",
    silverUnit: "tola",
    rateUnit: "per-tola",
  },
  india: {
    slug: "india",
    name: "India",
    currency: "INR",
    silverUnit: "gram",
    rateUnit: "per-10-gram",
  },
  uk: {
    slug: "uk",
    name: "United Kingdom",
    currency: "GBP",
    silverUnit: "gram",
    rateUnit: "per-gram",
  },
  usa: {
    slug: "usa",
    name: "United States",
    currency: "USD",
    silverUnit: "gram",
    rateUnit: "per-gram",
  },
  canada: {
    slug: "canada",
    name: "Canada",
    currency: "CAD",
    silverUnit: "gram",
    rateUnit: "per-gram",
  },
  "saudi-arabia": {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    currency: "SAR",
    silverUnit: "gram",
    rateUnit: "per-gram",
  },
  uae: {
    slug: "uae",
    name: "United Arab Emirates",
    currency: "AED",
    silverUnit: "gram",
    rateUnit: "per-gram",
  },
} as const;

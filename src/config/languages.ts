export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  direction: "ltr" | "rtl";
  font: string;
}

export const languages: Record<string, LanguageConfig> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    direction: "ltr",
    font: "geist",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl",
    font: "noto-kufi-arabic",
  },
  ur: {
    code: "ur",
    name: "Urdu",
    nativeName: "اردو",
    direction: "rtl",
    font: "noto-nastaliq-urdu",
  },
} as const;

export const defaultLanguage = "en";

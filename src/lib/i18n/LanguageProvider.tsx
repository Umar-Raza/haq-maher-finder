"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { languages } from "@/config/languages";
import { en, type TranslationKeys } from "./translations/en";
import { ar } from "./translations/ar";
import { ur } from "./translations/ur";

type Locale = "en" | "ar" | "ur";

interface LanguageContextValue {
  locale: Locale;
  direction: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const translations: Record<Locale, TranslationKeys> = { en, ar, ur };

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  direction: "ltr",
  setLocale: () => {},
  t: en,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslation() {
  const { t } = useContext(LanguageContext);
  return t;
}

function getSavedLocale(): Locale {
  try {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "ar" || stored === "ur") {
      return stored;
    }
  } catch {}
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getSavedLocale);

  const langConfig = languages[locale];
  const direction = langConfig?.direction ?? "ltr";
  const t = translations[locale];

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;

    document.documentElement.setAttribute("data-locale", locale);
  }, [locale, direction]);

  return (
    <LanguageContext.Provider value={{ locale, direction, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

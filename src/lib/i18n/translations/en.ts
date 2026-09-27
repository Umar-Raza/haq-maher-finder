export const en = {
  common: {
    siteName: "Haq Mehr Finder",
    siteDescription:
      "Calculate your Haq Mehr (Mahr) based on current silver rates. Supports multiple currencies, units, and languages.",
    loading: "Loading...",
    error: "An error occurred",
    close: "Close",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    changeLanguage: "Change language",
    switchTheme: "Switch theme",
  },
  nav: {
    calculator: "Calculator",
    silverRate: "Silver Rate",
    guides: "Guides",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
  },
  home: {
    badge: "Islamic Marriage Tool",
    title: "Calculate Your",
    titleHighlight: "Haq Mehr",
    subtitle:
      "Find the minimum Haq Mehr (Mahr) based on current silver rates. Supports multiple currencies, units, and languages.",
    cta: "Calculate Now",
    learnMore: "Learn More",
    howItWorks: "How It Works",
    howItWorksSubtitle: "Three simple steps to find your Haq Mehr",
    step1Title: "Enter Silver Rate",
    step1Desc:
      "Input the current silver rate in your local currency and preferred unit.",
    step2Title: "Calculate",
    step2Desc:
      "The calculator computes the minimum Haq Mehr based on 10 Dirhams of silver.",
    step3Title: "Share Result",
    step3Desc:
      "Share your result via WhatsApp, copy, or generate a beautiful image.",
    trustTitle: "Trusted & Transparent",
    trustDesc:
      "Haq Mehr Finder is an informational calculation tool. It does not issue a religious ruling or replace qualified scholarly guidance. Please consult a qualified Mufti or trusted Islamic scholar for your personal case.",
  },
  footer: {
    calculator: "Calculator",
    resources: "Resources",
    legal: "Legal",
    haqMehrCalculator: "Haq Mehr Calculator",
    silverRate: "Silver Rate",
    guides: "Guides",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    disclaimer: "Disclaimer",
    copyright:
      "Haq Mehr Finder. This is an informational tool only and does not constitute a religious ruling.",
    description:
      "Calculate your Haq Mehr based on current silver rates. Supports multiple currencies and languages.",
  },
  calculator: {
    silverRate: "Silver Rate",
    currency: "Currency",
    silverUnit: "Silver Unit",
    rateUnit: "Rate Unit",
    calculate: "Calculate",
    result: "Your Estimated Haq Mehr",
    basedOn: "Based on",
    perTola: "Per Tola",
    per10Gram: "Per 10 Gram",
    perGram: "Per Gram",
    tola: "Tola",
    masha: "Masha",
    gram: "Gram",
    enterSilverRate: "Enter silver rate",
  },
  validation: {
    required: "This field is required",
    invalidNumber: "Please enter a valid number",
    positiveNumber: "Please enter a positive number",
    tooLarge: "The value is too large",
    invalidCurrency: "Please select a valid currency",
    invalidUnit: "Please select a valid unit",
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type TranslationKeys = DeepStringify<typeof en>;

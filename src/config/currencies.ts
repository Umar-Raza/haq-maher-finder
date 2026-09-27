export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
  locale: string;
  decimalPlaces: number;
}

export const currencies: Record<string, CurrencyConfig> = {
  PKR: {
    code: "PKR",
    name: "Pakistani Rupee",
    symbol: "₨",
    locale: "en-PK",
    decimalPlaces: 0,
  },
  INR: {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    locale: "en-IN",
    decimalPlaces: 0,
  },
  USD: {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    locale: "en-US",
    decimalPlaces: 2,
  },
  GBP: {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    locale: "en-GB",
    decimalPlaces: 2,
  },
  EUR: {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    locale: "de-DE",
    decimalPlaces: 2,
  },
  SAR: {
    code: "SAR",
    name: "Saudi Riyal",
    symbol: "﷼",
    locale: "ar-SA",
    decimalPlaces: 2,
  },
  AED: {
    code: "AED",
    name: "UAE Dirham",
    symbol: "د.إ",
    locale: "ar-AE",
    decimalPlaces: 2,
  },
  CAD: {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    locale: "en-CA",
    decimalPlaces: 2,
  },
} as const;

export const currencyCodes = Object.keys(currencies);
export const defaultCurrency = "PKR";

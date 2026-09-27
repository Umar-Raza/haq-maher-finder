import { currencies } from "@/config/currencies";

export function formatCurrency(amount: number, currencyCode: string): string {
  const config = currencies[currencyCode];
  if (!config) return `${amount}`;

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
    minimumFractionDigits: config.decimalPlaces,
    maximumFractionDigits: config.decimalPlaces,
  }).format(amount);
}

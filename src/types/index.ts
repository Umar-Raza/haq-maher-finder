export interface CalculationInput {
  silverRate: number;
  currency: string;
  silverUnit: "tola" | "masha" | "gram";
  rateUnit: "per-tola" | "per-10-gram" | "per-gram";
}

export interface CalculationResult {
  silverQuantityTola: number;
  silverQuantityGrams: number;
  silverQuantityMasha: number;
  estimatedAmount: number;
  currency: string;
  silverRate: number;
  rateUnit: string;
  silverUnit: string;
}

export interface HistoryEntry {
  id: string;
  input: CalculationInput;
  result: CalculationResult;
  date: string;
  locale?: string;
}

export interface ShareData {
  title: string;
  text: string;
  url?: string;
}

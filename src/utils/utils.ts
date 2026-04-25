import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (str?: string): string => {
  if (typeof str !== "string" || !str.trim()) return "?";

  return (
    str
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "?"
  );
};

export function formatCurrency(
  amount: number,
  opts?: {
    currency?: string;
    locale?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    noDecimals?: boolean;
  },
) {
  const { currency = "USD", locale = "en-US", minimumFractionDigits, maximumFractionDigits, noDecimals } = opts ?? {};

  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    minimumFractionDigits: noDecimals ? 0 : minimumFractionDigits,
    maximumFractionDigits: noDecimals ? 0 : maximumFractionDigits,
  };

  return new Intl.NumberFormat(locale, formatOptions).format(amount);
}

export function normalizeNullableNumber(
  value: unknown
): number | null | undefined {
  if (value === "") return null;
  if (value === undefined) return undefined;
  if (value === null) return null;

  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

export function inputValue<T>(v: T | null | undefined): T | "" {
  return v ?? "";
}

 export const pickDirty = <T extends Record<string, any>>(
  dirtyFields: any,
  values: T
): Partial<T> => {
  const result: Partial<T> = {};

  (Object.keys(dirtyFields) as Array<keyof T>).forEach((key) => {
    const dirtyValue = dirtyFields[key];

    if (dirtyValue === true) {
      result[key] = values[key];
      return;
    }

    if (Array.isArray(dirtyValue)) {
      result[key] = values[key];
      return;
    }

    if (
      typeof dirtyValue === "object" &&
      dirtyValue !== null &&
      !Array.isArray(dirtyValue)
    ) {
      const nested = pickDirty(dirtyValue, values[key]);
      if (Object.keys(nested).length > 0) {
        result[key] = nested as T[typeof key];
      }
    }
  });

  return result;
}

export function toTitleCase(text: string): string {
  return text
    ?.toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function toMB(size: number | string | null | undefined, decimals = 2): string {
  const bytes = typeof size === "string" ? parseFloat(size) : size;

  if (!bytes || isNaN(bytes)) return "-";

  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(decimals)} MB`;
}

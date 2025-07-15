import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` and merges conflicting Tailwind classes using `twMerge`.
 * @param inputs - An array of class values to combine and merge.
 * @returns A string of merged and combined class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

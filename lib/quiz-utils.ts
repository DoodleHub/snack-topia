import {
  SNACK_SPIRITS,
  SPIRIT_ALIASES,
  type SnackSpirit,
} from "@/lib/constants";
import type { CategoryWeights } from "@/lib/quiz-context";

export function getNormalizedWeights(
  weights: CategoryWeights,
): CategoryWeights {
  const normalized: CategoryWeights = {};

  for (const [key, value] of Object.entries(weights)) {
    const canonical = SPIRIT_ALIASES[key] ?? key;
    normalized[canonical] = (normalized[canonical] ?? 0) + value;
  }

  return normalized;
}

export function getTopSnackSpirit(
  weights: CategoryWeights,
): SnackSpirit | null {
  const normalized = getNormalizedWeights(weights);
  const ranked = Object.entries(normalized).sort(([, a], [, b]) => b - a);

  for (const [name] of ranked) {
    const spirit = SNACK_SPIRITS[name];
    if (spirit) return spirit;
  }

  return null;
}

import {
  SNACK_SPIRITS,
  type SnackSpirit,
  type SpiritId,
  type SpiritWeights,
} from "@/lib/constants";

export function getSpiritName(id: SpiritId): string {
  return SNACK_SPIRITS[id].name;
}

export function hasCompletedQuiz(weights: SpiritWeights): boolean {
  return Object.keys(weights).length > 0;
}

export function getTopSnackSpirit(
  weights: SpiritWeights,
): (SnackSpirit & { id: SpiritId }) | null {
  const ranked = Object.entries(weights).sort(([, a], [, b]) => b - a);

  for (const [spiritId] of ranked) {
    const spirit = SNACK_SPIRITS[spiritId as SpiritId];
    if (spirit) return { id: spiritId as SpiritId, ...spirit };
  }

  return null;
}

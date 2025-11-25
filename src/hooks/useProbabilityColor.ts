import { PROBABILITY_THRESHOLDS } from '../constants';

/**
 * 합격 확률에 따른 색상을 반환하는 훅
 */
export function useProbabilityColor() {
  const getProbabilityColor = (probability: number): string => {
    if (probability >= PROBABILITY_THRESHOLDS.VERY_STABLE) {
      return 'bg-blue-100 text-blue-700';
    }
    if (probability >= PROBABILITY_THRESHOLDS.STABLE_HIGH) {
      return 'bg-blue-200 text-blue-800';
    }
    if (probability >= PROBABILITY_THRESHOLDS.STABLE) {
      return 'bg-green-100 text-green-700';
    }
    if (probability >= PROBABILITY_THRESHOLDS.POSSIBLE) {
      return 'bg-green-200 text-green-800';
    }
    if (probability >= PROBABILITY_THRESHOLDS.MODERATE) {
      return 'bg-yellow-100 text-yellow-700';
    }
    if (probability >= PROBABILITY_THRESHOLDS.AMBITIOUS) {
      return 'bg-orange-100 text-orange-700';
    }
    if (probability >= PROBABILITY_THRESHOLDS.REACH) {
      return 'bg-red-100 text-red-600';
    }
    return 'bg-red-200 text-red-700';
  };

  const getProbabilityBarColor = (probability: number): string => {
    if (probability >= PROBABILITY_THRESHOLDS.VERY_STABLE) return 'bg-green-700';
    if (probability >= PROBABILITY_THRESHOLDS.STABLE_HIGH) return 'bg-green-600';
    if (probability >= PROBABILITY_THRESHOLDS.STABLE) return 'bg-green-600';
    if (probability >= PROBABILITY_THRESHOLDS.POSSIBLE) return 'bg-yellow-400';
    if (probability >= PROBABILITY_THRESHOLDS.MODERATE) return 'bg-yellow-500';
    if (probability >= PROBABILITY_THRESHOLDS.AMBITIOUS) return 'bg-orange-400';
    if (probability >= PROBABILITY_THRESHOLDS.REACH) return 'bg-orange-600';
    return 'bg-red-600';
  };

  return {
    getProbabilityColor,
    getProbabilityBarColor,
  };
}


import { useProbabilityColor } from '@/hooks';

interface ProbabilityBarProps {
  probability: number;
  height?: 'sm' | 'md' | 'lg';
}

export function ProbabilityBar({ probability, height = 'md' }: ProbabilityBarProps) {
  const { getProbabilityBarColor } = useProbabilityColor();

  const heightClasses = {
    sm: 'h-2',
    md: 'h-2.5',
    lg: 'h-3',
  };

  return (
    <div className={`w-full bg-gray-200 rounded-full ${heightClasses[height]} overflow-hidden`}>
      <div
        className={`h-full rounded-full transition-all duration-300 ${getProbabilityBarColor(probability)}`}
        style={{ width: `${probability}%` }}
      />
    </div>
  );
}


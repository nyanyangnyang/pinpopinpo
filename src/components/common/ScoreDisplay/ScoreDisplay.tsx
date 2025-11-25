import { memo } from 'react';

interface ScoreDisplayProps {
  label: string;
  value: string | number;
  unit?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ScoreDisplay = memo(({ label, value, unit = '점', size = 'md' }: ScoreDisplayProps) => {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-600 text-sm mb-1 font-medium">{label}</p>
      <p className={`text-gray-900 ${sizeClasses[size]} font-bold`}>
        {value || '-'}
      </p>
      {value && <p className="text-gray-500 text-xs mt-1">{unit}</p>}
    </div>
  );
});

ScoreDisplay.displayName = 'ScoreDisplay';


import { memo } from 'react';
import { ProbabilityBar } from '../ProbabilityBar';
import { getGroupLabel, getTrackLabel } from '@/utils/formatters';

interface DepartmentCardProps {
  department: {
    name: string;
    group: string;
    track: string;
    quota: number;
    probability: number;
  };
  onClick: () => void;
}

export const DepartmentCard = memo(({ department, onClick }: DepartmentCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-2.5 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <div className="text-gray-900 text-xs sm:text-sm truncate font-medium">
            {department.name}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-1 flex-wrap">
            <span className="text-[10px] sm:text-xs text-gray-500">
              {getGroupLabel(department.group)}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400">·</span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              {getTrackLabel(department.track)}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400">·</span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              {department.quota}명
            </span>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
          {department.probability.toFixed(1)}%
        </span>
      </div>
      <ProbabilityBar probability={department.probability} height="sm" />
    </button>
  );
});

DepartmentCard.displayName = 'DepartmentCard';


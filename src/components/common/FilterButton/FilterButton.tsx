import { memo, ReactNode } from 'react';

interface FilterButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton = memo(({ children, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
});

FilterButton.displayName = 'FilterButton';


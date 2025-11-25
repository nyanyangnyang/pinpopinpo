import { memo } from 'react';
import { RefreshCw } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

export const Loading = memo(({ message = '로딩 중...' }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mb-3" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
});

Loading.displayName = 'Loading';


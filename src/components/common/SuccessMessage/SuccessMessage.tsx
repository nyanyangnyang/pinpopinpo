import { memo } from 'react';
import { Check } from 'lucide-react';

interface SuccessMessageProps {
  title: string;
  description?: string;
}

export const SuccessMessage = memo(({ title, description }: SuccessMessageProps) => {
  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3 animate-fadeIn">
      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
        <Check className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-green-900 font-semibold">{title}</p>
        {description && <p className="text-green-700 text-sm">{description}</p>}
      </div>
    </div>
  );
});

SuccessMessage.displayName = 'SuccessMessage';


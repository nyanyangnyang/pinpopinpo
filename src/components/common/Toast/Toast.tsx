/**
 * Toast 알림 컴포넌트
 */

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

export function Toast({
  id,
  type = 'info',
  message,
  description,
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 등장 애니메이션
    const showTimer = setTimeout(() => setIsVisible(true), 10);

    // 자동 닫기
    if (duration > 0) {
      const closeTimer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(closeTimer);
      };
    }

    return () => clearTimeout(showTimer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      iconColor: 'text-green-600',
      textColor: 'text-green-900',
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      iconColor: 'text-red-600',
      textColor: 'text-red-900',
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      iconColor: 'text-amber-600',
      textColor: 'text-amber-900',
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-900',
    },
  };

  const { icon: Icon, bgColor, borderColor, iconColor, textColor } = config[type];

  return (
    <div
      className={`
        ${bgColor} ${borderColor} ${textColor}
        border-l-4 rounded-lg shadow-lg p-4 mb-3 min-w-[320px] max-w-md
        transition-all duration-300 transform
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="flex items-start gap-3">
        <Icon className={`${iconColor} w-6 h-6 flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">{message}</p>
          {description && (
            <p className="text-sm mt-1 opacity-90">{description}</p>
          )}
        </div>
        <button
          onClick={handleClose}
          className={`${iconColor} hover:opacity-70 transition-opacity flex-shrink-0`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/**
 * Toast Container
 */
export function ToastContainer({ toasts }: { toasts: ToastProps[] }) {
  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col items-end">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}


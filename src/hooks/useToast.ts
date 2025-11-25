/**
 * Toast 알림 커스텀 훅
 */

import { useState, useCallback } from 'react';
import type { ToastProps } from '@/components/common/Toast';

let toastIdCounter = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
      const id = `toast-${++toastIdCounter}`;
      const newToast: ToastProps = {
        ...toast,
        id,
        onClose: () => removeToast(id),
      };

      setToasts((prev) => [...prev, newToast]);
      return id;
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const success = useCallback(
    (message: string, description?: string) => {
      return addToast({ type: 'success', message, description });
    },
    [addToast]
  );

  const error = useCallback(
    (message: string, description?: string) => {
      return addToast({ type: 'error', message, description });
    },
    [addToast]
  );

  const warning = useCallback(
    (message: string, description?: string) => {
      return addToast({ type: 'warning', message, description });
    },
    [addToast]
  );

  const info = useCallback(
    (message: string, description?: string) => {
      return addToast({ type: 'info', message, description });
    },
    [addToast]
  );

  return {
    toasts,
    success,
    error,
    warning,
    info,
    addToast,
    removeToast,
  };
}


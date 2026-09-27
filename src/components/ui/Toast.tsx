"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue>({
  showToast: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

const typeStyles: Record<ToastType, string> = {
  success: "border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200",
  error: "border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200",
  info: "border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextIdRef = useRef(0);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++nextIdRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-60 flex flex-col gap-2" dir="ltr">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-lg border px-4 py-3 text-sm shadow-lg animate-in slide-in-from-right ${typeStyles[toast.type]}`}
            role="alert"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

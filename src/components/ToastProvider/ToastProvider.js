import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (variant, message) => {
      let toastObject = {
        id: crypto.randomUUID(),
        variant,
        message,
      };
      let nextToasts = [toastObject, ...toasts];
      setToasts(nextToasts);
    },
    [toasts]
  );

  const removeToast = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => {
        return toast.id !== id;
      });
      setToasts(nextToasts);
    },
    [toasts]
  );

  const removeAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, removeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

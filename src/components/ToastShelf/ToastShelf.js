import React from "react";
import Toast from "../Toast";

import { ToastContext } from "../ToastProvider";
import useKeydown from "../../hooks/useKeydown";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeAllToasts } = React.useContext(ToastContext);

  useKeydown("Escape", removeAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import { ToastContext } from "../ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant = "notice", id, children }) {
  const { removeToast } = React.useContext(ToastContext);

  // Validate variant prop against defined variants
  if (!Object.keys(ICONS_BY_VARIANT).includes(variant)) {
    throw new Error(
      `Unexpected toast variant ${variant}. Valid variants are ${Object.keys(
        ICONS_BY_VARIANT
      )}`
    );
  }

  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={(event) => removeToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

import React from "react";
import styles from "./button.module.css";

interface IButton {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  type: "primary" | "secondary";
}

const Button: React.FC<IButton> = ({ children, onClick, type }) => {
  const buttonClass = `${styles.btn} ${styles[`btn_${type}`]}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;

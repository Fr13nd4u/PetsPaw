import React from "react";
import styles from "./shared.module.css";

interface ISwitch {
  id: string;
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<ISwitch> = ({ id, isOn, handleToggle }) => {
  return (
    <>
      <input
        className={styles.switch_checkbox}
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <label className={styles.switch_label} htmlFor={id}>
        <span className={styles.switch_button} />
      </label>
    </>
  );
};

export default Switch;

import React from "react";

import styles from "./modal.module.css";
import Button from "../buttons/Button";

interface IModal {
  active: boolean;
  setActive: (item: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
}

const Modal: React.FC<IModal> = ({ active, setActive, children }) => {
  const modalWrapperClass = active
    ? `${styles.modal_wrapper} ${styles.modal_wrapper_active}`
    : styles.modal_wrapper;

  const modalContentClass = active
    ? `${styles.modal_content} ${styles.modal_content_active}`
    : styles.modal_content;

  return (
    <div className={modalWrapperClass} onClick={() => setActive(false)}>
      <div
        className={modalContentClass}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div className={styles.modal_btn}>
          <Button type="secondary" onClick={() => setActive(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
                fill="#FF868E"
              />
            </svg>
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;

"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "./user-actions.module.css";

const UserActions: React.FC = () => {
  const { userActions } = useSelector((state: RootState) => state.userActions);

  if (userActions.length === 0) {
    return;
  }

  const formatTime = (utc: number) => {
    const date = new Date(utc * 1000); // Convert to milliseconds
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return userActions.map((action, index) => {
    const svgs = {
      like: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM6.66667 8H5.33333V6.66667H6.66667V8ZM14.6667 8H13.3333V6.66667H14.6667V8ZM6.13333 11.0667L6.53333 11.6C8.26667 13.9111 11.7333 13.9111 13.4667 11.6L13.8667 11.0667L14.9333 11.8667L14.5333 12.4C12.2667 15.4222 7.73333 15.4222 5.46667 12.4L5.06667 11.8667L6.13333 11.0667Z"
            fill="#97EAB9"
          />
        </svg>
      ),
      dislike: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM6.66667 8H5.33333V6.66667H6.66667V8ZM14.6667 8H13.3333V6.66667H14.6667V8ZM5.06667 13.4667L5.46667 12.9333C7.73333 9.91111 12.2667 9.91111 14.5333 12.9333L14.9333 13.4667L13.8667 14.2667L13.4667 13.7333C11.7333 11.4222 8.26667 11.4222 6.53333 13.7333L6.13333 14.2667L5.06667 13.4667Z"
            fill="#FFD280"
          />
        </svg>
      ),
      favourites: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z"
            fill="#FF868E"
          />
        </svg>
      ),
    };

    return (
      <div key={index} className={styles.info_box}>
        <p className={styles.info_time}>{formatTime(action.time)}</p>
        <p className={styles.info_text}>
          Image ID: <span>{action.img_id} </span>
          {action.text}
        </p>
        {svgs[action.type]}
      </div>
    );
  });
};

export default UserActions;

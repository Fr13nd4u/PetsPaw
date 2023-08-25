import React from "react";
import Button from "../shared/buttons/Button";
import { useRouter, usePathname } from "next/navigation";

import styles from "./breadcrumbs.module.css";

interface IBreadcrumbs {}

const Breadcrumbs: React.FC<IBreadcrumbs> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const splitStringToArray = (inputString: string) => {
    return inputString.split("/").filter((item) => item !== "");
  };

  return (
    <div className={styles.breadcrumbs_block}>
      <Button type="primary" onClick={() => router.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_1_1841)">
            <path
              d="M4.70975 10.9901L13.3095 19.5896C13.8565 20.1369 14.7435 20.1369 15.2903 19.5896C15.8371 19.0427 15.8371 18.1558 15.2903 17.6091L7.6808 9.99988L15.29 2.39096C15.8369 1.84391 15.8369 0.957107 15.29 0.410284C14.7432 -0.136761 13.8563 -0.136761 13.3093 0.410284L4.70953 9.00985C4.43611 9.28339 4.29956 9.64153 4.29956 9.99983C4.29956 10.3583 4.43638 10.7167 4.70975 10.9901Z"
              fill="#FF868E"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1841">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Button>

      {splitStringToArray(pathname).map((slug, index) => (
        <p key={index} className={styles.breadcrumbs_slug}>
          {slug}
        </p>
      ))}
    </div>
  );
};

export default Breadcrumbs;

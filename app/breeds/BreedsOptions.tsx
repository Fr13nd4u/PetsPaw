"use client";
import React from "react";
import SelectInput from "../components/shared/inputs/SelectInput";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

import styles from "./breeds.module.css";
import { fetchBreeds } from "../redux/slices/breeds";

interface IBreedsOptions {
  breeds: any;
}

const BreedsOptions: React.FC<IBreedsOptions> = ({ breeds }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [limitOption, setLimitOption] = React.useState<number>(10);
  const [breedOption, setBreedOption] = React.useState<string>("all");

  const handleLimitChange = (value: number) => {
    setLimitOption(value);
  };

  const handleBreedChange = (value: string) => {
    setBreedOption(value);
  };

  React.useEffect(() => {
    dispatch(fetchBreeds(limitOption));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limitOption]);

  const newBreeds = [
    {
      value: "all",
      label: "All breeds",
    },
    ...breeds.map((cat: any) => {
      return {
        value: cat.id,
        label: cat.name,
      };
    }),
  ];

  const limits = [
    {
      value: 5,
      label: "Limit: 5",
    },
    {
      value: 10,
      label: "Limit: 10",
    },
    {
      value: 15,
      label: "Limit: 15",
    },
    {
      value: 20,
      label: "Limit: 20",
    },
  ];

  return (
    <div className={styles.breeds_option}>
      <div style={{ width: 193, height: 40, background: "#f00" }}></div>
      <SelectInput
        options={newBreeds}
        value={breedOption}
        onChange={handleBreedChange}
        className={styles.breeds_select}
      />
      <SelectInput
        options={limits}
        value={limitOption}
        onChange={handleLimitChange}
      />
      <button className={styles.sort_btn}>
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
            d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            fill="#8C8C8C"
          />
        </svg>
      </button>
      <button className={styles.sort_btn}>
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
            d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            fill="#8C8C8C"
          />
        </svg>
      </button>
    </div>
  );
};

export default BreedsOptions;

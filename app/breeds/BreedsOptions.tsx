"use client";
import React from "react";
import SelectInput from "../components/shared/inputs/SelectInput";

import styles from "./breeds.module.css";

const BreedsOptions: React.FC = () => {
  const [limitOption, setLimitOption] = React.useState<number>(10);
  const [breedOption, setBreedOption] = React.useState<string>("all");

  const handleLimitChange = (value: number) => {
    setLimitOption(value);
  };

  const handleBreedChange = (value: string) => {
    setBreedOption(value);
  };

  console.log("limitOption: ", limitOption);
  console.log("breedOption: ", breedOption);

  const breeds = [
    {
      value: "all",
      label: "All breeds",
    },
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
    <div>
      <div style={{ width: 123, height: 40, background: "#f00" }}></div>
      <SelectInput
        options={breeds}
        value={breedOption}
        onChange={handleBreedChange}
        className={styles.breeds_select}
      />

      <SelectInput
        options={limits}
        value={limitOption}
        onChange={handleLimitChange}
      />
    </div>
  );
};

export default BreedsOptions;

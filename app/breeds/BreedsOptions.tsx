"use client";
import React from "react";
import SelectInput from "../components/shared/inputs/SelectInput";

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

const BreedsOptions: React.FC = () => {
  const [limitOption, setLimitOption] = React.useState<number>(10);

  const handleLimitChange = (value: number) => {
    setLimitOption(value);
  };

  console.log("limitOption ", limitOption);

  return (
    <div>
      <SelectInput
        options={limits}
        value={limitOption}
        onChange={handleLimitChange}
      />
    </div>
  );
};

export default BreedsOptions;

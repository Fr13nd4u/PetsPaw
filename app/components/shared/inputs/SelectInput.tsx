import React from "react";
import styles from "./inputs.module.css";

interface SelectInputProps {
  options: { value: any; label: string }[];
  value: number;
  onChange: (value: number) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(+e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;

import React from "react";
import styles from "./inputs.module.css";

interface SelectInputProps<T> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

const SelectInput = <T extends string | number>({
  options,
  value,
  onChange,
  className,
}: SelectInputProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <select value={value} onChange={handleChange} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;

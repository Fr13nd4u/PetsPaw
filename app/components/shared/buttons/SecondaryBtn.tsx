import React from "react";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const SecondaryBtn: React.FC<IButton> = ({ children }) => {
  return <button>{children}</button>;
};

export default SecondaryBtn;

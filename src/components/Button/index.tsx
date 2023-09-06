import React from 'react';
import { IconType } from "react-icons/lib";

interface Props {
  type: "primary" | "secondary";
  icon?: IconType;
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}


export const Button: React.FC<Props> = ({ type, icon, iconPosition, children }) => {
  return (
    <button className={`button-${type} self-center min-w-max`}>
      {children}
    </button>
  );
};

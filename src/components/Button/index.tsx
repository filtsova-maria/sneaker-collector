import React from 'react';
import { IconType } from "react-icons/lib";

interface Props {
  variant: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
  onClick: (e: React.MouseEvent) => void;
  IconLeft?: IconType;
  IconRight?: IconType;
  className?: string;
  children?: React.ReactNode;
}


export const Button: React.FC<Props> = ({ variant, type, onClick, IconLeft, IconRight, className, children }) => {
  return (
    <button type={type} onClick={onClick} className={`${variant === "primary" ? "button-primary" : "button-secondary"} self-center min-w-max flex justify-center ${className}`}>
      {IconLeft ? <IconLeft size={24} className="mr-2" /> : null}
      {children}
      {IconRight ? <IconRight size={24} className="mr-2" /> : null}
    </button>
  );
};

import React from 'react';
import { IconType } from "react-icons/lib";

interface Props {
  type: "primary" | "secondary";
  IconLeft?: IconType;
  IconRight?: IconType;
  className?: string;
  children?: React.ReactNode;
}


export const Button: React.FC<Props> = ({ type, IconLeft, IconRight, children }) => {
  return (
    <button className={`${type === "primary" ? "button-primary" : "button-secondary"} self-center min-w-max flex`}>
      {IconLeft ? <IconLeft size={24} className="mr-2"/> : null}
      {children}
      {IconRight ? <IconRight size={24} className="mr-2"/> : null}
    </button>
  );
};

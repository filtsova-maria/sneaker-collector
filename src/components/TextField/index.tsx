import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon?: IconType;
  prompt?: string;
  className?: string;
}

export const TextField = ({ prompt, icon, className }: Props): JSX.Element => {
  return (
    <input></input>
  );
};

import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  Icon?: IconType;
  placeholder?: string;
}

export const TextField: React.FC<Props> = ({ placeholder, Icon }: Props): JSX.Element => {
  return (
    <div className="flex border border-gray-80 rounded-lg bg-white p-3 w-72 self-center">
      {Icon ? <Icon size={24} className="text-gray-80 mr-2"/> : null}
      <input placeholder={placeholder} className="border-0 outline-none"/>
    </div >
  );
};

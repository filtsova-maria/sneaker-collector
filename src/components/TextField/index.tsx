import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  Icon?: IconType;
  placeholder?: string;
  className?: string;
  label?: string;
}

export const TextField: React.FC<Props> = ({ placeholder, Icon, label, className }): JSX.Element => {
  return (
    <div className={className}>
      <label>{label}</label>
      <div className="flex border border-gray-80 rounded-lg bg-white p-3 self-center">
        {Icon ? <Icon size={24} className="text-gray-80 mr-2" /> : null}
        <input placeholder={placeholder} className="border-0 outline-none" />
      </div >
    </div>
  );
};

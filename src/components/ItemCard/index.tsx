import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Sneaker } from "types";
import ItemText from "./ItemText";

interface Props extends Sneaker { };

export const ItemCard: React.FC<Props> = ({ brand, name, price, size, year }) => {
  return (
    <div onClick={() => {/* open edit modal */ }} className="bg-white rounded-xl p-6 w-[400px] border-white border  hover:border-black">
      <div className="flex justify-between">
        <h3>{name}</h3>
        <MdDeleteOutline size={24} className="text-black" onClick={() => {/* send delete item request */}}/>
      </div>
      <caption>{brand}</caption>
      <div className="flex">
        <ItemText label="Year" text={year.toString()} />
        <ItemText label="Size" text={size.toString() + "US"} />
        <ItemText label="Price" text={"$" + price.toString()} />
      </div>
    </div>
  );
};

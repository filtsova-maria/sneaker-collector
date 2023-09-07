import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Sneaker } from "types";

interface Props extends Sneaker { };

export const ItemCard: React.FC<Props> = ({ brand, name, price, size, year }) => {
  return (
    <div onClick={() => {/* open edit modal */}}>
      <div>
        <h3>{name}</h3>
        <MdDeleteOutline size={24} className="text-black mr-2" />
      </div>
      <caption>{brand}</caption>
      <div>
        <span>
          {year}
        <caption>Year</caption>
        </span>
        <span>
        {size}US
        <caption>Size</caption>
        </span>
        <span>
          ${price}
        <caption>Price</caption>
        </span>
      </div>
    </div>
  );
};

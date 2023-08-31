import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./style.css";

interface Props {
  states: "hover" | "default";
  className: any;
}

export const ItemCard = ({ states, className }: Props): JSX.Element => {
  return (
    <div className={`item-card ${states} ${className}`}>
      <div className="heading">
        <div className="frame">
          <div className="text-wrapper">Air jordan</div>
          <div className="div">Nike</div>
        </div>
        <MdDeleteOutline />
      </div>
      <div className="set-time">
        <div className="stasrt-run">
          <div className="text-wrapper-2">2023</div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Year</div>
          </div>
        </div>
        <div className="div-2" />
        <div className="last-run">
          <div className="text-wrapper-4">11US</div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Size</div>
          </div>
        </div>
        <div className="div-2" />
        <div className="counter">
          <div className="text-wrapper-2">$230</div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./style.css";

interface Props {
  size: "large" | "small";
  type: "primary" | "secondary";
  icon: "none" | "right" | "left";
  state: "active" | "deafult" | "focus" | "hover" | "disabled";
  className: any;
  children: any;
}

export const Button = ({ size, type, icon, state, className, children }: Props): JSX.Element => {
  return (
    <button className={`button ${state} ${size} ${type} ${className}`}>
      <div className="state-layer">
        {icon === "none" && <div className="primary">Label</div>}


        {icon === "left" && size === "small" && <div className="div">Label</div>}
        {children}
        {(icon === "right" || (icon === "left" && size === "large")) && (
          <div className={`text-wrapper state-1-${state} ${icon} type-0-${type}`}>Label</div>
        )}

      </div>
    </button>
  );
};

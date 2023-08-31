import React from "react";
import "./style.css";

interface Props {
  inputName: boolean;
  iconLeft: boolean;
  iconRight: boolean;
  state: "filling" | "active" | "filled" | "focus" | "empty" | "hover" | "alert";
  className: any;
}

export const TextField = ({ inputName = true, iconLeft, iconRight, state, className }: Props): JSX.Element => {
  return (
    <div className={`text-field ${className}`}>
      {inputName && (
        <div className="label">
          {state === "alert" && <>alert</>}

          {state === "empty" && <>empty</>}

          {state === "focus" && <>focus</>}

          {state === "filled" && <>filled</>}

          {state === "hover" && <>hover</>}

          {state === "active" && <>active</>}

          {state === "filling" && <>filling</>}
        </div>
      )}

      {["active", "empty", "filled", "filling", "focus", "hover"].includes(state) && (
        <div className={`text-input state-${state}`}>
          <div className="MM-DD-YYYY">
            {["empty", "filled", "focus", "hover"].includes(state) && <>Label</>}

            {["active", "filling"].includes(state) && (
              <>
                <span className="span">
                  {state === "active" && <>⏐</>}

                  {state === "filling" && <>Label</>}
                </span>
                <span className="span-2">
                  {state === "active" && <>Label</>}

                  {state === "filling" && <>⏐</>}
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {state === "alert" && (
        <>
          <div className="MM-DD-YYYY-wrapper">
            <div className="text-wrapper">Label</div>
          </div>
          <>{inputName && <div className="div">Alert message</div>}</>
        </>
      )}
    </div>
  );
};

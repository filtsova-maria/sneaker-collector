import React from "react";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { MdDeleteOutline } from "react-icons/md";


export const SearchForm = (): JSX.Element => {
    return (
        <div className="frame">
            <div className="div">
                <div className="text-wrapper">Air jordan</div>
            </div>
            <div className="div-2">
                {/* <TextField className="text-field-instance" state="filled" />
                <TextField className="text-field-instance" state="filled" />
                <TextField className="text-field-instance" state="filled" />
                <TextField className="text-field-instance" state="filled" />
                <TextField className="text-field-instance" state="filled" /> */}
            </div>
            <div className="div-3">
                <button
                >Save</button>
                <button
                >Delete</button>
            </div>
        </div>
    );
};

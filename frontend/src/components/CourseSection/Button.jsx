import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ label }) => {
    return (
        <button className="start-button">
            {label} <GoArrowUpRight className="button-arrow" />
        </button>
    );
};

export default Button;

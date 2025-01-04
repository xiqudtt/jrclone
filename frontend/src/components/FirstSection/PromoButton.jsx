import React from "react";

const PromoButton = ({ label, icon }) => {
    return (
        <button className="promo-button">
            {label} <span>{icon}</span>
        </button>
    );
};

export default PromoButton;
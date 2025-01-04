import React from "react";

const CTA = ({ scrolled }) => {
    return (
        <div className={`cta ${scrolled ? "scrolled" : ""}`}>
            <button className="cta-button">Начать обучение</button>
        </div>
    );
};

export default CTA;

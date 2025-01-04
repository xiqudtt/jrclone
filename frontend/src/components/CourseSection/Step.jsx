import React from "react";

const Step = ({ title, description, iconColor , svgIcon}) => {
    return (
        <div className="step">
            <div className="step-icon">
                {svgIcon}
            </div>
            <div>
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{description}</p>
            </div>
        </div>
    );
};

export default Step;

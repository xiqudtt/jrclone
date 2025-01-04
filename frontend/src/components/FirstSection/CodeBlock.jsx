import React from "react";

const CodeBlock = ({ imageUrl }) => {
    return (
        <div className="code-block">
            <img src={imageUrl} alt="Code Example" />
        </div>
    );
};

export default CodeBlock;
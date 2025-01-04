import React from "react";

const DropdownMenu = ({ items }) => {
    return (
        <ul className="dropdown-list">
            {items.map((item, index) => (
                <li key={index} className="dropdown-item">
                    <a href={item.link} className="dropdown-link">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default DropdownMenu;

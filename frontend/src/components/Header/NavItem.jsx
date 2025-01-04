import React from "react";

const NavItem = ({ label, onClick }) => {
    return (
        <li className="nav-item">
            <button className="nav-link" onClick={onClick}>
                {label}
            </button>
        </li>
    );
};

export default NavItem;
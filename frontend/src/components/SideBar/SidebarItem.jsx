import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SidebarItem = ({ title, keyName, dropdowns, rotations, toggleDropdown, links }) => {
    return (
        <li
            className={`sidebar-nav-item ${dropdowns[keyName] ? "active" : ""}`}
            onClick={() => toggleDropdown(keyName)}
        >
            <div className="sidebar-item-container">
                <div className="sidebar-item-text">
                    {title}
                </div>
                <button className="sidebar-item-toggle">
                    <MdKeyboardArrowDown
                        className={`forward-img ${rotations[keyName] ? 'rotated' : ''}`}
                    />
                </button>
            </div>
            {dropdowns[keyName] && (
                <ul className="dropdown-list">
                    {links.map((link, index) => (
                        <li key={index} className="dropdown-item">
                            <a href={link.url} className="dropdown-link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SidebarItem;

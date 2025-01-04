import React, { useState } from "react";
import "../CSS/Sidebar.css";
import logo from '../assets/sidebar-jr-logo.svg';
import { FaUniversity } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
    const [dropdowns, setDropdowns] = useState({
        university: true,
        education: true,
        community: true
    });
    const [rotations, setRotations] = useState({
        university: true,
        education: true,
        community: true
    });

    const toggleDropdown = (key) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));

        setRotations((prevState) => ({
            ...prevState,
            [key]: !prevState[key], // Уникально вращаем каждую кнопку
        }));
    };

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <div className="sidebar-header">
                    <img src={logo} alt="logo" className="sidebar-logo" />
                </div>
                <ul className="sidebar-nav-list">
                    <li
                        className={`sidebar-nav-item ${dropdowns["university"] ? "active" : ""}`}
                        onClick={() => toggleDropdown("university")}
                    >
                        <div className="sidebar-item-container">
                            <div className="sidebar-item-text">
                                <FaUniversity className="icon" /> Университет
                            </div>
                            <button className="sidebar-item-toggle">
                                <MdKeyboardArrowDown
                                    className={`forward-img ${rotations["university"] ? 'rotated' : ''}`}
                                />
                            </button>
                        </div>
                        {dropdowns["university"] && (
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="/subscriptions/plan1" className="dropdown-link">
                                        План 1
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="/subscriptions/plan2" className="dropdown-link">
                                        План 2
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li
                        className={`sidebar-nav-item ${dropdowns["education"] ? "active" : ""}`}
                        onClick={() => toggleDropdown("education")}
                    >
                        <div className="sidebar-item-container">
                            <div className="sidebar-item-text">
                                Обучение
                            </div>
                            <button className="sidebar-item-toggle">
                                <MdKeyboardArrowDown
                                    className={`forward-img ${rotations["education"] ? 'rotated' : ''}`}
                                />
                            </button>
                        </div>
                        {dropdowns["education"] && (
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="/subscriptions/plan1" className="dropdown-link">
                                        План 1
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="/subscriptions/plan2" className="dropdown-link">
                                        План 2
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li
                        className={`sidebar-nav-item ${dropdowns["community"] ? "active" : ""}`}
                        onClick={() => toggleDropdown("community")}
                    >
                        <div className="sidebar-item-container">
                            <div className="sidebar-item-text">
                                Сообщество
                            </div>
                            <button className="sidebar-item-toggle">
                                <MdKeyboardArrowDown
                                    className={`forward-img ${rotations["community"] ? 'rotated' : ''}`}
                                />
                            </button>
                        </div>
                        {dropdowns["community"] && (
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="/subscriptions/plan1" className="dropdown-link">
                                        План 1
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="/subscriptions/plan2" className="dropdown-link">
                                        План 2
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="sidebar-nav-item">
                        <div className="sidebar-item-container">
                            <div className="sidebar-item-text">
                                <a href= "/followers" className="dropdown-link">Подписки</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;

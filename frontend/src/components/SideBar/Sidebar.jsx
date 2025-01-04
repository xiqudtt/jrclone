import React, { useState } from "react";
import "../../CSS/Sidebar.css";
import logo from '../../assets/sidebar-jr-logo.svg';
import SidebarItem from './SidebarItem';

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
            [key]: !prevState[key],
        }));
    };

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <div className="sidebar-header">
                    <img src={logo} alt="logo" className="sidebar-logo" />
                </div>
                <ul className="sidebar-nav-list">
                    <SidebarItem
                        title="Университет"
                        keyName="university"
                        dropdowns={dropdowns}
                        rotations={rotations}
                        toggleDropdown={toggleDropdown}
                        links={[
                            { url: "/subscriptions/plan1", label: "План 1" },
                            { url: "/subscriptions/plan2", label: "План 2" },
                            { url: "/subscriptions/plan3", label: "План 3" }
                        ]}
                    />
                    <SidebarItem
                        title="Обучение"
                        keyName="education"
                        dropdowns={dropdowns}
                        rotations={rotations}
                        toggleDropdown={toggleDropdown}
                        links={[
                            { url: "/subscriptions/plan1", label: "План 1" },
                            { url: "/subscriptions/plan2", label: "План 2" }
                        ]}
                    />
                    <SidebarItem
                        title="Сообщество"
                        keyName="community"
                        dropdowns={dropdowns}
                        rotations={rotations}
                        toggleDropdown={toggleDropdown}
                        links={[
                            { url: "/subscriptions/plan1", label: "План 1" },
                            { url: "/subscriptions/plan2", label: "План 2" }
                        ]}
                    />
                    <li className="sidebar-nav-item">
                        <div className="sidebar-item-container">
                            <div className="sidebar-item-text">
                                <a href="/followers" className="dropdown-link">Подписки</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;

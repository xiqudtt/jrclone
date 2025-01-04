import React from "react";
import NavItem from "./NavItem";

const Nav = ({ handleScrollToSection }) => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <NavItem label="О курсе" onClick={() => handleScrollToSection("about")} />
                <NavItem label="Особенности" onClick={() => handleScrollToSection("features")} />
                <NavItem label="Формат обучения" onClick={() => handleScrollToSection("format")} />
                <NavItem label="Отзывы" onClick={() => handleScrollToSection("reviews")} />
                <NavItem label="Наши выпускники" onClick={() => handleScrollToSection("graduates")} />
            </ul>
        </nav>
    );
};

export default Nav;

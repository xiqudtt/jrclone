import React from "react";
import "../../CSS/Header.css";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Функция для плавного перехода
    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button
                                className="nav-link active"
                                onClick={() => handleScrollToSection("about")}
                            >
                                О курсе
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => handleScrollToSection("features")}
                            >
                                Особенности
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => handleScrollToSection("format")}
                            >
                                Формат обучения
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => handleScrollToSection("reviews")}
                            >
                                Отзывы
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                onClick={() => handleScrollToSection("graduates")}
                            >
                                Наши выпускники
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className={`cta ${scrolled ? "scrolled" : ""}`}>
                    <button className="cta-button">Начать обучение</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

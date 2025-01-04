import React, { useState, useEffect } from "react";
import "../../CSS/Header.css";
import Nav from "./Nav";
import CTA from "./Cta";

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


    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <Nav handleScrollToSection={handleScrollToSection} />
                <CTA scrolled={scrolled} />
            </div>
        </header>
    );
};

export default Header;

import React, { useEffect, useState, useRef } from "react";

import Sidebar from "./SideBar/Sidebar.jsx";
import "../CSS/Layout.css";
import Header from "./Header/Header.jsx";
import FirstSection from "./FirstSection/FirstSection.jsx";
import CourseSection from "./CourseSection/СourseSection.jsx";

const Layout = () => {
    const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
    const [isCourseSectionVisible, setIsCourseSectionVisible] = useState(false);

    const firstSectionRef = useRef(null);
    const courseSectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null, // Отслеживать в пределах viewport
            threshold: 0.2, // Секция считается видимой, если 20% ее высоты видимо
        };

        const firstObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsFirstSectionVisible(true);
            }
        }, observerOptions);

        const courseObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsCourseSectionVisible(true);
            }
        }, observerOptions);

        if (firstSectionRef.current) {
            firstObserver.observe(firstSectionRef.current);
        }

        if (courseSectionRef.current) {
            courseObserver.observe(courseSectionRef.current);
        }

        return () => {
            if (firstSectionRef.current) firstObserver.unobserve(firstSectionRef.current);
            if (courseSectionRef.current) courseObserver.unobserve(courseSectionRef.current);
        };
    }, []);

    return (
        <div className="layout">
            <Header />
            <div className="content">
                <Sidebar />
                <main className="main-content">
                    <div
                        className={`child-element ${
                            isFirstSectionVisible ? "visible" : ""
                        }`}
                        ref={firstSectionRef}
                    >
                        <FirstSection />
                    </div>
                    <div
                        className={`child-element ${
                            isCourseSectionVisible ? "visible" : ""
                        }`}
                        ref={courseSectionRef}
                    >
                        <CourseSection />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;

import React from "react";

import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import Header from "./header.jsx";
import FirstSection from "./firstSection.jsx";
import CourseSection from "./СourseSection.jsx";

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <div className="content">
                <Sidebar />
                <main className="main-content">
                    <FirstSection/>
                    <CourseSection/>
                </main>
            </div>
        </div>
    );
};

export default Layout;

import React from "react";
import PromoStats from "./PromoStats";
import PromoButton from "./PromoButton";
import Ribbon from "./Ribbon";
import CodeBlock from "./CodeBlock.jsx";
import "../../CSS/FirstSection.css"
import img from "../../assets/webide-mobile.59d677ef.png";

const PromoSection = () => {
    return (
        <section className="promo-section">
            <div className="promo-content">
                <p className="promo-subtitle">КУРСЫ JAVA ОНЛАЙН</p>
                <h1 className="promo-title">Здесь ты станешь программистом</h1>
                <p className="promo-description">
                    Ты научишься программировать. Не важно, сколько тебе лет и какой у тебя багаж знаний.
                    Программирование, как и езда на велосипеде — это навык: поэтому важна практика. Считай, что
                    курсы Java разработки — это твой "велотренажер". Тренируйся писать код на Java онлайн: в своем темпе,
                    с практикой с первых уроков. Кодить — не страшно! Просто начни.
                </p>
                <PromoStats
                    rating="4.9"
                    reviews="4 400+ отзывов"
                    graduatesCount="30K+"
                />
                <PromoButton label="Я в деле — начнем!" icon="➔" />

                <div className="codeblock-container">
                    <CodeBlock imageUrl={img} />
                </div>
            </div>
            <Ribbon />
        </section>
    );
};

export default PromoSection;

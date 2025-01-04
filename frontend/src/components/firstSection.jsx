import "../CSS/firstSection.css";
import img from "..//assets/webide-mobile.59d677ef.png"
import React from "react";

export default function FirstSection() {
    return (<>

            <section className="promo-section">
                <div className="promo-content">
                    <p className="promo-subtitle">КУРСЫ JAVA ОНЛАЙН</p>
                    <h1 className="promo-title">Здесь ты станешь программистом</h1>
                    <p className="promo-description">
                        Ты научишься программировать. Не важно, сколько тебе лет и какой у тебя багаж знаний.
                        Программирование, как и езда на велосипеде — это навык: поэтому важна практика. Считай, что
                        курсы
                        Java разработки — это твой "велотренажер". Тренируйся писать код на Java онлайн: в своем темпе,
                        с
                        практикой с первых уроков. Кодить — не страшно! Просто начни.
                    </p>
                    <div className="promo-stats">
                        <div className="promo-stat">
                            <p className="promo-rating">4.9 <span>★★★★★</span></p>
                            <p className="graduades-count-text">4 400+ отзывов</p>
                        </div>
                        <div className="promo-stat">
                            <p className="promo-graduates">30K+</p>
                            <p className="graduades-count-text">трудоустроенных выпускников</p>
                        </div>
                    </div>
                    <button className="promo-button">Я в деле — начнем! <span>➔</span></button>
                </div>
                <div className="promo-ribbon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 944 969" fill="none">
                        <path
                            d="M68 68c13.167 92.667 30 297 140 308s287-201.5 335.5-181-206.5 388.5-244 459-47 176.5 16.5 206.5 158 12 223.5-206.5 162.5-437 222-448 31.5 141.5-71 472S741 913 877 773"
                            stroke="#CDF567" stroke-width="134" stroke-linecap="round"
                        />
                    </svg>
                </div>
                <div className="code-block">
                    <img src={img}></img>
                </div>
            </section>
            <div className="container">
                <div className="svg-content-th">
                    <svg width='1700' height='140' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path fill='#CDF567' d='M60 0h126v28H60z'/>
                        <path fill='#0D1117' d='M242 0h80v28h-80z'/>
                        <path fill='#C9B7EC' d='M350 0h110v28H350z'/>
                        <path fill='#0D1117' d='M1054 0h348v28h-348zM1458 0h179v28h-179z'/>
                        <path fill='#C9B7EC' d='M1154 28h161v28h-161z'/>
                        <path fill='#CDF567' d='M1154 28h56v56h-56z'/>
                        <path fill='#0D1117' d='M827 55h300v29H827z'/>
                        <path fill='#0D1117' d='M1019 83h108v29h-108z'/>
                        <path fill='#C9B7EC' d='M855 84h81v28h-81z'/>
                        <path fill='#CDF567'
                              d='M855 112h56v28h-56zM432 84h28v28h-28zM1127 112h28v28h-28zM1402 28h28v28h-28z'/>
                        <path fill='#0D1117' d='M460 0h694v56H460z'/>
                    </svg>
                </div>
            </div>
        </>
    );
}

import React from "react";
import "../../CSS/CourseSection.css";
import pictureUrl from "../../assets/about-pic@2x.661cd577.png";
import { GoArrowUpRight } from "react-icons/go";
import Step from "./Step";  // Step component
import Button from "./Button";
import FirstIcon from "./SvgIcons/FirstIcon.jsx";
import SecondIcon from "./SvgIcons/SecondIcon.jsx";
import ThirdIcon from "./SvgIcons/ThirdIcon.jsx";
import StartCareeIcon from "./SvgIcons/StartCareeIcon.jsx";


const CourseSection = () => {
    return (
        <section className="course-section" id={"about"}>
            <div className="course-content">
                <span className="course-label">О КУРСЕ</span>
                <h1 className="course-title">
                    Что ты получишь на курсах по Java от{" "}
                    JavaRush?
                </h1>
                <p className="course-description">
                    Тебя ждет увлекательный опыт обучения программированию
                </p>
                <p className="course-details">
                    JavaRush — это не просто курсы по Java, это игра. Ты прокачиваешь
                    “игрового персонажа” до новых уровней и зарабатываешь ачивки. Ты
                    изучаешь основы Java онлайн и тут же закрепляешь новые знания на
                    практике. С первых уроков ты получаешь заряд мотивации, чтобы достичь
                    цели: стать профессиональным разработчиком.
                </p>
                <div className="picture-way">
                    <img src={pictureUrl} alt="Course Overview" />
                </div>
            </div>

            <div className="course-steps">
                <Step
                    title="НАЧАЛО"
                    description="Зарегистрируйся, чтобы получить доступ к курсу по Java, настроенному под твои предпочтения к формату занятий."
                    iconColor="#FFDEE2"
                    svgIcon={<FirstIcon/>}
                />
                <Step
                    title="ОБУЧЕНИЕ"
                    description="Читай мини-лекции по программированию на Java: учить новую теорию порциями гораздо легче."
                    iconColor="#D9CDF2"
                    svgIcon={<SecondIcon/>}
                />
                <Step
                    title="ПРАКТИКА"
                    description="Решай задачи и сразу получай результат — здесь онлайн-обучение Java основано на усиленной практике."
                    iconColor="#E3F9AA"
                    svgIcon={<ThirdIcon/>}
                />
                <Step
                    title="СТАРТ КАРЬЕРЫ"
                    description="Пиши проекты для портфолио и изучай материалы о том, как подготовиться к началу работы в IT."
                    iconColor="#D2E6FB"
                    svgIcon={<StartCareeIcon/>}
                />
            </div>

            <div className="course-footer">
                <Button label="Начать обучение БЕСПЛАТНО" />
            </div>
        </section>
    );
};

export default CourseSection;

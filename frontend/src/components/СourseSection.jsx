import React from "react";
import "../CSS/CourseSection.css";
import pictureUrl from "../assets/about-pic@2x.661cd577.png"

import { GoArrowUpRight } from "react-icons/go";



const CourseSection = () => {
    return (<>
            <div className="container">
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
                        <img src={pictureUrl}></img>
                    </div>
                </div>
                <div className="course-steps">
                    <div className="step">
                        <div className="step-icon">
                            <svg width="66" height="72" viewBox="0 0 66 72" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M59.1335 58.8497L39.4709 70.1686C37.4554 71.3673 35.1538 72 32.8088 72C30.4639 72 28.1623 71.3673 26.1468 70.1686L6.46798 58.8497C4.5095 57.6206 2.89103 55.9195 1.76094 53.9023C0.630853 51.8851 0.0253361 49.6164 0 47.3043V24.6664C0.0272569 22.3344 0.654524 20.0487 1.82134 18.0294C2.98816 16.0102 4.65525 14.3253 6.66206 13.1372L26.3409 1.81825C28.3592 0.627855 30.6596 0 33.0029 0C35.3461 0 37.6465 0.627855 39.6649 1.81825L59.3276 13.1372C61.3344 14.3253 63.0015 16.0102 64.1683 18.0294C65.3351 20.0487 65.9624 22.3344 65.9896 24.6664V47.3043C65.8939 49.6464 65.2171 51.9278 64.0203 53.9432C62.8235 55.9587 61.1441 57.6448 59.1335 58.8497Z"
                                    fill="#FFDEE2"/>
                                <path
                                    d="M36.27 48.87C36.27 48.87 39.01 43.89 39.38 37.2C39.75 30.51 36.87 25.3 32.31 23C27.75 25.3 24.87 30.53 25.24 37.21C25.61 43.89 28.35 48.88 28.35 48.88H36.27V48.87Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26.6799 44.75H37.9399" stroke="#0D1117" stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path
                                    d="M25.21 36.7002L23.49 38.6602C22.4 39.9002 21.87 41.5402 22.03 43.1902L22.56 48.7502L26.18 43.0502"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M39.49 36.7002L41.21 38.6602C42.3 39.9002 42.83 41.5402 42.67 43.1902L42.14 48.7502L38.52 43.0502"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M32.3099 34.3899C33.3482 34.3899 34.1899 33.5482 34.1899 32.5099C34.1899 31.4716 33.3482 30.6299 32.3099 30.6299C31.2716 30.6299 30.4299 31.4716 30.4299 32.5099C30.4299 33.5482 31.2716 34.3899 32.3099 34.3899Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M32.3101 40.3701V44.7501" stroke="#0D1117" stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="step-title">НАЧАЛО</h3>
                            <p className="step-description">
                                Зарегистрируйся, чтобы получить доступ к курсу по Java, настроенному
                                под твои предпочтения к формату занятий.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <svg width="66" height="72" viewBox="0 0 66 72" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M59.1335 58.8497L39.4709 70.1686C37.4554 71.3673 35.1538 72 32.8088 72C30.4639 72 28.1623 71.3673 26.1468 70.1686L6.46798 58.8497C4.5095 57.6206 2.89103 55.9195 1.76094 53.9023C0.630853 51.8851 0.0253361 49.6164 0 47.3043V24.6664C0.0272569 22.3344 0.654524 20.0487 1.82134 18.0294C2.98816 16.0102 4.65525 14.3253 6.66206 13.1372L26.3409 1.81825C28.3592 0.627855 30.6596 0 33.0029 0C35.3461 0 37.6465 0.627855 39.6649 1.81825L59.3276 13.1372C61.3344 14.3253 63.0015 16.0102 64.1683 18.0294C65.3351 20.0487 65.9624 22.3344 65.9896 24.6664V47.3043C65.8939 49.6464 65.2171 51.9278 64.0203 53.9432C62.8235 55.9587 61.1441 57.6448 59.1335 58.8497Z"
                                    fill="#D9CDF2"/>
                                <g clip-path="url(#clip0_661_15311)">
                                    <path d="M32.48 23.9697L47.97 33.4497L33.45 41.9697L17.97 32.4797L32.48 23.9697Z"
                                          stroke="#0D1117" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path
                                        d="M22.8201 36.3799V43.0099L30.3001 47.5899C32.1901 48.7499 34.5601 48.7699 36.4701 47.6499L43.2601 43.6699V36.3799"
                                        stroke="#0D1117" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M46.97 46.9697C48.0745 46.9697 48.97 46.0743 48.97 44.9697C48.97 43.8652 48.0745 42.9697 46.97 42.9697C45.8654 42.9697 44.97 43.8652 44.97 44.9697C44.97 46.0743 45.8654 46.9697 46.97 46.9697Z"
                                        fill="#0D1117"/>
                                    <path d="M46.97 33.4502V44.9702" stroke="#0D1117" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_661_15311">
                                        <rect width="32" height="32" fill="white" transform="translate(17 20)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <h3 className="step-title">ОБУЧЕНИЕ</h3>
                            <p className="step-description">
                                Читай мини-лекции по программированию на Java: учить новую теорию
                                порциями гораздо легче.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <svg width="66" height="72" viewBox="0 0 66 72" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M59.1335 58.8497L39.4709 70.1686C37.4554 71.3673 35.1538 72 32.8088 72C30.4639 72 28.1623 71.3673 26.1468 70.1686L6.46798 58.8497C4.5095 57.6206 2.89103 55.9195 1.76094 53.9023C0.630853 51.8851 0.0253361 49.6164 0 47.3043V24.6664C0.0272569 22.3344 0.654524 20.0487 1.82134 18.0294C2.98816 16.0102 4.65525 14.3253 6.66206 13.1372L26.3409 1.81825C28.3592 0.627855 30.6596 0 33.0029 0C35.3461 0 37.6465 0.627855 39.6649 1.81825L59.3276 13.1372C61.3344 14.3253 63.0015 16.0102 64.1683 18.0294C65.3351 20.0487 65.9624 22.3344 65.9896 24.6664V47.3043C65.8939 49.6464 65.2171 51.9278 64.0203 53.9432C62.8235 55.9587 61.1441 57.6448 59.1335 58.8497Z"
                                    fill="#E3F9AA"/>
                                <path
                                    d="M22.2109 36.8696L20.4431 38.6374C19.9549 39.1255 19.8758 39.8378 20.2663 40.2283L28.7516 48.7136C29.1421 49.1042 29.8544 49.025 30.3426 48.5369L32.1103 46.7691C32.5985 46.2809 32.6777 45.5686 32.2871 45.1781L23.8018 36.6928C23.4113 36.3023 22.699 36.3814 22.2109 36.8696Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M19.545 42.3639L20.9592 40.9497L28.0303 48.0208L26.6161 49.435C26.2272 49.8239 25.5908 49.8239 25.2019 49.435L19.545 43.7782C19.1561 43.3892 19.1561 42.7528 19.545 42.3639Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M43.7775 35.1018L45.5453 33.3341C46.0335 32.8459 46.1126 32.1336 45.7221 31.7431L37.2368 23.2578C36.8463 22.8673 36.134 22.9464 35.6458 23.4346L33.8781 25.2024C33.3899 25.6905 33.3108 26.4028 33.7013 26.7933L42.1866 35.2786C42.5771 35.6691 43.2894 35.59 43.7775 35.1018Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M46.4148 29.6358L45.0006 31.05L37.9296 23.979L39.3438 22.5648C39.7327 22.1758 40.3691 22.1758 40.758 22.5648L46.4148 28.2216C46.8038 28.6105 46.8038 29.2469 46.4148 29.6358Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M36.5297 29.6217L26.6302 39.5212L29.4587 42.3497L39.3582 32.4502L36.5297 29.6217Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="step-title">ПРАКТИКА</h3>
                            <p className="step-description">
                                Решай задачи и сразу получай результат — здесь онлайн-обучение Java
                                основано на усиленной практике.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <svg width="66" height="72" viewBox="0 0 66 72" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M59.1335 58.8497L39.4709 70.1686C37.4554 71.3673 35.1538 72 32.8088 72C30.4639 72 28.1623 71.3673 26.1468 70.1686L6.46798 58.8497C4.5095 57.6206 2.89103 55.9195 1.76094 53.9023C0.630853 51.8851 0.0253361 49.6164 0 47.3043V24.6664C0.0272569 22.3344 0.654524 20.0487 1.82134 18.0294C2.98816 16.0102 4.65525 14.3253 6.66206 13.1372L26.3409 1.81825C28.3592 0.627855 30.6596 0 33.0029 0C35.3461 0 37.6465 0.627855 39.6649 1.81825L59.3276 13.1372C61.3344 14.3253 63.0015 16.0102 64.1683 18.0294C65.3351 20.0487 65.9624 22.3344 65.9896 24.6664V47.3043C65.8939 49.6464 65.2171 51.9278 64.0203 53.9432C62.8235 55.9587 61.1441 57.6448 59.1335 58.8497Z"
                                    fill="#D2E6FB"/>
                                <path
                                    d="M42.0001 32.0001C42.0001 26.9401 37.8201 22.8501 32.7201 23.0001C27.9201 23.1501 23.9801 27.2301 24.0001 32.0301C24.0101 34.9201 25.3801 37.4801 27.5101 39.1201C28.4701 39.8601 29.0001 41.0201 29.0001 42.2301V46.0001H37.0001V42.2301C37.0001 40.9901 37.5901 39.8301 38.5601 39.0701C40.6501 37.4201 42.0001 34.8701 42.0001 32.0101V32.0001Z"
                                    stroke="#0D1117" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M29 42.23H37" stroke="#0D1117" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M36 46C36 47.66 34.66 49 33 49C31.34 49 30 47.66 30 46" stroke="#0D1117"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M37 31L33 34V31L29 34" stroke="#0D1117" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="step-title">СТАРТ КАРЬЕРЫ</h3>
                            <p className="step-description">
                                Пиши проекты для портфолио и изучай материалы о том, как
                                подготовиться к началу работы в IT.
                            </p>
                        </div>
                    </div>


                </div>
                <div className="course-footer">
                    <button className="start-button">Начать обучение БЕСПЛАТНО <GoArrowUpRight className="button-arrow"/> </button>

                </div>
            </section>
        </>
    );
};
export default CourseSection;

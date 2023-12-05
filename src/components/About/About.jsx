/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Laptop from '../../images/laptop.png';
import Resume from '../../images/resume.png';
import Boy from '../../images/boy.png';
import Time from '../../images/time.png';
import './About.css';

function About() {
    return (
        <section className='about'>
            <div className='about__grid'>
                <h4 className='about__title'>
                    Разнообразим твой образовательный процесс
                </h4>
                <div className='about__grid-container'>
                    <p className='about__discription'>
                        Предоставим возможность выбора профессии мечтыс учетом программы бакалавриата и желания развиваться
                    </p>
                    <img 
                        src={Laptop} 
                        alt="Laptop" 
                        className='about__image'
                    />
                </div>
            </div>
            <div className='about__grid'>
                <h4 className='about__title'>
                    Дадим экспертные рекомендации
                </h4>
                <div className='about__grid-container'>
                    <p className='about__discription'>
                        Подскажем пути достижения цели по выбранному направлению, порекомендуем каналы, подкасты, исследования, статьи и книги
                    </p>
                    <img 
                        src={Time} 
                        alt="" 
                        className='about__image'
                    />
                </div>
            </div>
            <div className='about__grid'>
                <h4 className='about__title'>
                    Сформируем актуальное резюме
                </h4>
                <div className='about__grid-container'>
                    <p className='about__discription'>
                        Создадим резюме, которое будет наполняться автоматически по ходу обучения в Академии и с использованием внешнего контента                
                    </p>
                    <img 
                        src={Resume} 
                        alt="" 
                        className='about__image'
                    />
                </div>
            </div>
            <div className='about__grid'>
                <h4 className='about__title'>
                    Поможем устроиться на работу мечты
                </h4>
                <div className='about__grid-container'>
                    <p className='about__discription'>
                        Предоставим дополнительную информацию о работодателях, поделимся релевантными вакансиями и контактами партнеров
                    </p>
                    <img 
                        src={Boy} 
                        alt="" 
                        className='about__image'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
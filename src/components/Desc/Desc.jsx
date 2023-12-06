/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Laptop from '../../images/laptop.png';
import Time from '../../images/time.png';
import Resume from '../../images/resume.png';
import Boy from '../../images/boy.png';
import './Desc.css';

function Desc() {
    return (
        <section className='desc'>
            <div className='desc__block'>
                <h2 className='desc__title'>
                    Разнообразим твой образовательный процесс
                </h2>
                <div className='desc__container'>
                    <p className='desc__text'>
                        Предоставим возможность выбора профессии мечты с учетом программы бакалавриата и желания развиваться
                    </p>
                    <img 
                        src={Laptop} 
                        alt="Иконка"  
                        className='desc__image'
                    />
                </div>
            </div>
            <div className='desc__block'>
                <h2 className='desc__title'>
                    Дадим экспертные рекомендации
                </h2>
                <div className='desc__container'>
                    <p className='desc__text'>
                        Подскажем пути достижения цели по выбранному направлению, порекомендуем каналы, подкасты, исследования, статьи и книги
                    </p>
                    <img 
                        src={Time} 
                        alt="Иконка"  
                        className='desc__image'
                    />
                </div>
            </div>
            <div className='desc__block'>
                <h2 className='desc__title'>
                    Сформируем актуальное резюме
                </h2>
                <div className='desc__container'>
                    <p className='desc__text'>
                        Создадим резюме, которое будет наполняться автоматически по ходу обучения в Академии и с использованием внешнего контента
                    </p>
                    <img 
                        src={Resume} 
                        alt="Иконка"  
                        className='desc__image'
                    />
                </div>
            </div>
            <div className='desc__block'>
                <h2 className='desc__title'>
                    Поможем устроиться на работу мечты
                </h2>
                <div className='desc__container'>
                    <p className='desc__text'>
                        Предоставим дополнительную информацию о работодателях, поделимся релевантными вакансиями и контактами партнеров Академии
                    </p>
                    <img 
                        src={Boy} 
                        alt="Иконка"  
                        className='desc__image'
                    />
                </div>
            </div>
        </section>
    );
};

export default Desc;
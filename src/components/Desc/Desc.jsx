/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from 'react';
// import Slide from '../Slide/Slide';
import Laptop from '../../images/laptop.png';
import Time from '../../images/time.png';
import Resume from '../../images/resume.png';
import Boy from '../../images/boy.png';
import GirlThink from '../../images/girl-think.svg';
import PlayBtn from '../../images/play-btn.svg';
import GirlTable from '../../images/girl-table.svg';
import GirlStrong from '../../images/girl-strong.svg';
import GirlPan from '../../images/girl-pan.svg';
import GirlCont from '../../images/girl-cont.svg';
import Cloud from '../../images/cloud.svg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Desc.css';

const Desc = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        // <Slide>
        < Slider {...settings}>
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
            <section className='desc__block2'>
                <img src={GirlThink} alt="Girl"  className='slider__image'/>
                <div className='desc__block2_container'>
                    <h2 className='desc__title_type'>
                        НЕ ЗНАЕШЬ КЕМ СТАНЕШЬ ПОСЛЕ ОКОНЧАНИЯ ВУЗА?
                    </h2>
                    <p className='desc__text_type'>
                        Не можешь определиться с будущей профессией, но есть желание стать востребованным и успешным специалистом?
                    </p>
                </div>
                <div className='desc__block2_three'>
                    <img 
                        src={PlayBtn} 
                        alt="Button" 
                        className='desc__button'
                    />
                </div>
            </section>
            <section className='desc__block2'>
                <img src={GirlTable} alt="Girl" className='slider__image'/>
                <div className='desc__block2_container'>
                    <h2 className='desc__title_type'>
                        Пройди тестирование
                    </h2>
                    <p className='desc__text_type'>
                        Мы поможем тебе определить несколько подходящих профессий, исходя из твоих интересов
                    </p>
                </div>
                <div className='desc__block2_three desc__block2_three_three'>
                    <img 
                        src={PlayBtn} 
                        alt="Button" 
                        className='desc__button'
                    />
                </div>
            </section>
            <section className='desc__block2'>
                <img src={GirlStrong} alt="Girl" className='slider__image'/>
                <img src={Cloud} alt="" className='cloud'/>
                <p className='cloud__text'>
                    Я буду Экономистом!
                </p>
                <div className='desc__block2_container'>
                    <h2 className='desc__title_type'>
                        ВЫБЕРИ СВОЮ КАРЬЕРНУЮ ЦЕЛЬ
                    </h2>
                    <p className='desc__text_type'>
                        А мы покажем тебе маршрут к ней: какие знания и навыки тебе предстоит получить
                    </p>
                </div>
                <div className='desc__block2_three desc__block2_three_four'>
                    <img 
                        src={PlayBtn} 
                        alt="Button" 
                        className='desc__button'
                    />
                </div>
            </section>
            <section className='desc__block2 mySlides fade'>
                <img src={GirlPan} alt="Girl" className='slider__image'/>
                <div className='desc__block2_container'>
                    <h2 className='desc__title_type'>
                        А мы ДАДИМ РЕКОМЕНДАЦИИ: КАК и ГДЕ ПОЛУЧИТЬ НУЖНЫЕ ЗНАНИЯ и НАВЫКИ
                    </h2>
                    <p className='desc__text_type'>
                        Покажем какие дисциплины ты должен освоить в твоем ВУЗе, какие дополнительные курсы будут полезны и порекомендуем что почитать
                    </p>
                </div>
                <div className='desc__block2_three desc__block2_three_five'>
                    <img 
                        src={PlayBtn} 
                        alt="Button" 
                        className='desc__button'
                    />
                </div>
            </section>
            <section className='desc__block2'>
                <img src={GirlCont} alt="Girl" className='slider__image'/>
                <div className='desc__block2_container'>
                    <h2 className='desc__title_type'>
                        Поможем устроиться на работу мечты
                    </h2>
                    <p className='desc__text_type'>
                    Сформируем твое резюме, где работодатель увидит подтверждение твоих знаний и навыков, ведь по ходу твоего обучения ты ни раз это докажешь
                    </p>
                </div>
                <div className='desc__block2_three desc__block2_three_two'>
                    <img 
                        src={PlayBtn} 
                        alt="Button" 
                        className='desc__button'
                    />
                </div>
            </section>
            <section className='desc__last'>
                <h1 className='desc__last-title'>ХОЧЕШЬ УЗНАТЬ БОЛЬШЕ?</h1>
                <div className='desc__last-block'>
                    <div className='desc__block'>
                        <h2 className='desc__title'>
                            ТЫ студент или только планируешь поступление в вуз?
                        </h2>
                        <div className='desc__container'>
                            <p className='desc__text'>
                                Оставляй заявку на участие в проекте и мы обязательно свяжемся с тобой. Твоя обратная связь поможет нам сделать наш продукт еще лучше!
                            </p>
                            <img 
                                src={Boy} 
                                alt="Иконка"  
                                className='desc__image'
                            />
                        </div>
                    </div>
                    <div className='desc__block'>
                        <h2 className='desc__title'>
                            ТЫ представитель образовательной организации?
                        </h2>
                        <div className='desc__container'>
                            <p className='desc__text'>
                                Мы ищем сотрудничества с ВУЗами по всей России, готовы обмениваться идеями и вместе развивать технологии индивидуализации обучения
                            </p>
                            <img 
                                src={Time} 
                                alt="Иконка"  
                                className='desc__image'
                            />
                        </div>
                    </div>
                </div>
                <div className='desc__last-btns'>
                    <button className='desc__last-btn'>
                        Оставить заявку
                    </button>
                    <button className='desc__last-btn'>
                        Оставить заявку
                    </button>
                </div>
            </section>
        </Slider>
        // </Slide>
    );
};

export default Desc;
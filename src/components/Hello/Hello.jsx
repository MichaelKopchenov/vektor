/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Logo from '../../images/frame.svg';
import SmlLogo from '../../images/sml-logo.svg';
import Robo from '../../images/robo.gif';
import './Hello.css';

function Hello() {
    return (
        <section className='hello'>
            <div className='hello__logo'>
                <img 
                    src={SmlLogo} 
                    alt="Логотип" 
                    className='hello__image'
                />
            </div>
            <ul className='hello__menu'>
                <li className='hello__menu-list'>
                    <a href="#Test" className='hello__menu-link'>
                        <div className='hello__list-marker hello__list-marker_1' />
                        <p className='hello__menu-text'>
                            Выбор профессии
                        </p>
                    </a>
                </li>
                <li className='hello__menu-list'>
                    <a href="#Career" className='hello__menu-link'>
                        <div className='hello__list-marker hello__list-marker_2' />
                        <p className='hello__menu-text'>
                            Карьерная цель
                        </p>
                    </a>
                </li>
                <li className='hello__menu-list'>
                    <a href="#Traectory" className='hello__menu-link'>
                        <div className='hello__list-marker hello__list-marker_3' />
                        <p className='hello__menu-text'>
                            Образовательная траектория
                        </p>
                    </a>
                </li>
                <li className='hello__menu-list'>
                    <a href="#Work" className='hello__menu-link'>
                        <div className='hello__list-marker hello__list-marker_4' />
                        <p className='hello__menu-text'>
                            Трудоустройство
                        </p>
                    </a>
                </li>
            </ul>
            <div className='hello__container'>
                <div>
                    <img 
                        src={Robo} 
                        alt="Маскот" 
                        className='hello__robo'
                    />
                </div>
                <div className='hello__robo-container'>
                    <h3 className='hello__robo-title'>
                        Привет! &#128075;
                    </h3>
                    <p className='hello__robo-subtitle'>
                        Я - Вектор, твой интеллектуальный помощник. Я покажу тебе твою образовательную траекторию, и провожу тебя к желаемой карьерной цели.
                    </p>
                </div>
            </div>
            <div className='hello__menu-home'>
                <a href="#Home" className='hello__menu-link'>
                    <div className='hello__list-marker hello__list-marker_5' />
                    <p className='hello__menu-text'>
                        В начало
                    </p>
                </a>
            </div>
        </section>
    );
};

export default Hello;
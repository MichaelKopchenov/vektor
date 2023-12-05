/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../images/Logo.svg';
import FDDLogo from '../../images/FDDLogo.svg'
import { FDD_URL } from '../../utils/urlConstants';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className='header__container'>
                <div className='header__logos'>
                    <a 
                        href={FDD_URL}
                        target='_blank'
                        rel='noreferrer'
                        className='header__logos-link'
                    >
                        <img 
                            src={FDDLogo} 
                            alt="Fast Digital Dicisions" 
                            className='header__logos-fdd'/>
                    </a>
                    <img 
                        src={Logo} 
                        alt="Вектор-ИОТ" 
                        className='header__logos-vektor'/>
                </div>
                <div className='header__menu'>
                    <ul className='header__menu-ul'>
                        <li className='header__menu-list'>
                            Личный кабинет
                        </li>
                        <li className='header__menu-list'>
                            Контакты
                        </li>
                        <li className='header__menu-list'>
                            Информация
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
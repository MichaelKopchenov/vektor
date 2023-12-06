/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import VK from '../../images/vk-footer.svg';
import Telergam from '../../images/telegram-footer.svg';
import FDD from '../../images/FDDLogo.svg';
import { 
    FDD_URL,
    URL_TELEGRAM,
    URL_VK 
} from '../../utils/urlConstants'
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <a 
                href={FDD_URL} 
                target='_blank' 
                rel='noreferrer'
            >
                <img 
                    src={FDD} 
                    alt="Fast Digital Dicisions" 
                    className='footer__fddlogo'
                />
            </a>
            <div className='footer__buttons'>
                <button className='footer__btn'>
                    <p className='footer__btn-text'>
                        Политика обработки персональных данных
                    </p>
                </button>
                <button className='footer__btn'>
                    <p className='footer__btn-text'>
                        Техническая поддержка
                    </p>
                </button>
            </div>
            <div className='footer__social'>
                <a 
                    href={URL_TELEGRAM} 
                    target='_blank' 
                    rel='noreferrer'
                    className='footer__social-icon'
                >
                    <img 
                        src={Telergam} 
                        alt="" 
                    />
                </a>
                <a 
                    href={URL_VK} 
                    target='_blank' 
                    rel='noreferrer'
                    className='footer__social-icon'
                >
                    <img 
                        src={VK} 
                        alt=""
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
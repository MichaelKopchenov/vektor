import React from 'react';
import Logo from '../../images/frame2.svg';
import './Main.css';

function Main() {
    return (
        <section className='main'>
            <div className='main__container'>
                <div className='main__container-logo'>
                    <img 
                        src={Logo} 
                        alt="Логотип" 
                        className='main__logo'
                    />
                </div>
                <h1 className='main__title'>
                    Платформа индивидуализации образовательной траектории
                </h1>
            </div>
        </section>
    );
};

export default Main;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../images/Vektor.png';
import Robo from '../../images/robo.gif'
import './Hello.css';

function Hello() {
    return (
        <section className='hello'>
            <div className='hello__container'>
                <div className='hello__logos'>
                    <img src={Logo} alt='Logo' className='hello__logos-title_logo'/>
                </div>
                <div className='hello__logos'>
                    <h2 className='hello__logos-subtitle'>
                        Платформа индивидуализации<br /> образовательной траектории
                    </h2>
                </div>
            </div>
            <div className='hello__container'>
                <div>
                    <img src={Robo} alt="" />
                </div>
                <div className='hello__robo-container'>
                    <h3 className='hello__robo-title'>
                        Привет! &#128075;
                    </h3>
                    <p className='hello__robo-subtitle'>
                        Для входа на портал используй свою учетную запись.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hello;
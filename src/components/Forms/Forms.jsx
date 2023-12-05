import React from 'react';
import './Forms.css'

function Forms() {
    return (
        <section className='forms'>
            <h4 className='forms__title'>
                Интересно?
            </h4>
            <div className='forms__container'>
                <div className='forms__block'>
                    <p className='forms__text'>
                        Оставляй заявку на участие в проекте и мы обязательно свяжемся с тобой
                    </p>
                    <button className='forms__btn forms__btn-first'>
                        Заполнить
                    </button>
                </div>
                <div className='forms__block'>
                    <p className='forms__text'>
                        А если ты - представитель ВУЗа и готов сотрудничать, то заполни форму по кнопке ниже
                    </p>
                    <button className='forms__btn'>
                        Заполнить
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Forms;
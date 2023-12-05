import React from 'react';
import GirlThink from '../../images/girl-think.svg'
import GirlTable from '../../images/girl-table.svg'
import GirlStrong from '../../images/girl-strong.svg'
import GirlPan from '../../images/girl-pan.svg'
import GirlCont from '../../images/girl-cont.svg'
import SmartPhone from '../../images/smartphone1.svg'
import SmartPhoneTwo from '../../images/smartphone2.svg'
import SmartPhoneThree from '../../images/smartphone3.svg'
import SmartPhoneFour from '../../images/smartphone4.svg'
import SmartPhoneFive from '../../images/smartphone5.svg'
import Cloud from '../../images/cloud.svg'
import PlayBtn from '../../images/play-btn.svg'
import './Description.css';

function Description() {
    return (
        <section className='description'>
            <div className='description__contaier'>
                <img 
                    src={GirlThink} 
                    alt="Аватар"  
                    className='description__container-image'
                />
                <div className='description__container-text'>
                    <h4 className='description__container-text_title'>
                        Не знаешь кем станешь после окончания вуза?
                    </h4>
                    <p className='description__container-text_subtitle'>
                        Не можешь определиться с будущей профессией, но есть желание стать востребованным и успешным специалистом?
                    </p>
                </div>
                <img 
                    src={SmartPhone} 
                    alt="Смартфон" 
                    className='description__container-image' 
                />
                <img 
                    src={PlayBtn} 
                    alt="Кнопка воспроизведения" 
                    className='description__container-btn' 
                />
            </div>
            <div className='description__contaier'>
                <img 
                    src={GirlTable} 
                    alt="Аватар"  
                    className='description__container-image'
                />
                <div className='description__container-text'>
                    <h4 className='description__container-text_title'>
                        Пройди тест!
                    </h4>
                    <p className='description__container-text_subtitle'>
                        Мы поможем тебе определить несколько подходящих профессий, исходя из твоих интересов
                    </p>
                </div>
                <img 
                    src={SmartPhoneTwo} 
                    alt="Смартфон" 
                    className='description__container-image' 
                />
                <img 
                    src={PlayBtn} 
                    alt="Кнопка воспроизведения" 
                    className='description__container-btn_two' 
                />
            </div>
            <div className='description__contaier'>
                <div className='description__container_cap'>
                <img 
                    src={Cloud} 
                    alt="Облако"
                    className='description__capture' 
                />
                <p className='description__figcapture'>
                    Я буду менеджером проектов!
                </p>
                
                <img 
                    src={GirlStrong} 
                    alt="Аватар"  
                    className='description__container-image_strong'
                />
                </div>
                <div className='description__container-text'>
                    <h4 className='description__container-text_title'>
                        Выбери свою карьерную цель
                    </h4>
                    <p className='description__container-text_subtitle'>
                        А мы покажем тебе маршрут к ней: какие знания и навыки тебе предстоит получить
                    </p>
                </div>
                <img 
                    src={SmartPhoneThree} 
                    alt="Смартфон" 
                    className='description__container-image' 
                />
                <img 
                    src={PlayBtn} 
                    alt="Кнопка воспроизведения" 
                    className='description__container-btn' 
                />
            </div>
            <div className='description__contaier'>
                <div className='description__container-text description__container-text_block'>
                    <h4 className='description__container-text_title description__container-text_title_block'>
                    А мы ДАДИМ РЕКОМЕНДАЦИИ: КАК и ГДЕ ПОЛУЧИТЬ НУЖНЫЕ ЗНАНИЯ и НАВЫКИ
                    </h4>
                    <div className='description__block'>
                    <p className='description__container-text_subtitle description__container-text_subtitle_block'>
                    Покажем какие дисциплины ты должен освоить в твоем ВУЗе, какие дополнительные курсы будут полезны и порекомендуем что почитать
                    </p>
                    <img 
                        src={GirlPan} 
                        alt="Аватар"  
                        className='description__container-image_pan'
                    />
                    </div>
                </div>
                <img 
                    src={SmartPhoneFour} 
                    alt="Смартфон" 
                    className='description__container-image_smrt' 
                />
                <img 
                    src={PlayBtn} 
                    alt="Кнопка воспроизведения" 
                    className='description__container-btn_two' 
                />
            </div>
            <div className='description__contaier'>
                <img 
                    src={GirlCont} 
                    alt="Аватар"  
                    className='description__container-image'
                />
                <div className='description__container-text'>
                    <h4 className='description__container-text_title'>
                        Поможем устроиться на работу мечты
                    </h4>
                    <p className='description__container-text_subtitle'>
                    Сформируем твое резюме, где работодатель увидит подтверждение твоих знаний и навыков, ведь по ходу твоего обучения ты ни раз это докажешь
                    </p>
                </div>
                <img 
                    src={SmartPhoneFive} 
                    alt="Смартфон" 
                    className='description__container-image' 
                />
                <img 
                    src={PlayBtn} 
                    alt="Кнопка воспроизведения" 
                    className='description__container-btn' 
                />
            </div>
        </section>
    );
};

export default Description;
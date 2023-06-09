import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Наталия Бабич.</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};


import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import icons from '../img/copyright.png'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Наталия Бабич</h2>
                <div className={style.blockIcons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div>
                    <h4>2023 <img src={icons} style={{width:'10px'}}/> Все права защищены</h4>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import style from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const DistantWork = () => {
    return (
        <div className={style.distantBlock}>
            <div className={`${styleContainer.container} ${style.distantContainer}`}>
                <h2 className={style.title} style={{textAlign:'center'}}>Рассматриваю варианты удаленной работы</h2>
                <div>
                    <button className={style.btn}>Смотреть</button>
                </div>
            </div>
        </div>
    );
};


import React from 'react';
import style from './Project.module.css'


type ProjectPropsType = {
    img: any
    title: string
    description: string
}

export const Project = ({img, title, description}: ProjectPropsType) => {
    return (
        <div className={style.project} style={img}>

            <div className={style.imgContainer}>
                <a className={style.btn}>Смотреть</a>
            </div>

            <div className={style.descriptionContainer}>
                <h3>{title}</h3>
                <div>
                    <span className={style.description}>
                    {description}
                </span>
                </div>
            </div>
            {/*<DescriptionOfWork title={title} description={description}/>*/}
        </div>
    );
};

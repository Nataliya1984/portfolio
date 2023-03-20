import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'JavaScript/TypeScript, HTML5, CSS3, Sass, Less'}/>
                    <Skill title={'CSS'} description={'etur ascing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Skill title={'React'} description={'React, Redux & Redux-Toolkit, Rest api, Axios etc'}/>
                </div>
            </div>
        </div>
    );
}
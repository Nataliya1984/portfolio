import React from 'react';
import style from "./MyProjects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";
import todolist from "../img/todolist.jpg";
import social_network from '../img/social_network.jpg'



export const MyProjects = () => {

    const todolists = {
        backgroundImage: `url(${todolist})`,
    }

    const socialNetwork ={
        backgroundImage: `url(${social_network})`,
    }



    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.projects}>
                    <Project img={todolists} title={'Название проекта'} description={'Краткое описание...'}/>
                    <Project img={socialNetwork} title={'Название проекта'} description={'Краткое описание...'} />
                </div>
            </div>
        </div>
    );
};

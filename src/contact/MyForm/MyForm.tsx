import React from 'react';
import style from './MyForm.module.css'

export const MyForm = () => {
    return (
        <form className={style.form}>
            <input type="text" style={{margin:'5px'}}/>
            <input type="text" style={{margin:'5px'}}/>
            <textarea style={{margin:'5px'}}></textarea>
        </form>
    );
};


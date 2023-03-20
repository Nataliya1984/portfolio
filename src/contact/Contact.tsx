import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import { MyForm } from "./MyForm/MyForm";
import style from './Contact.module.css'

export const Contact = () => {
  return(
      <div className={style.contactBlock}>
          <div className={`${styleContainer.container} ${style.contactContainer}`}>
              <h2 className={style.title}>Контакты</h2>
                  <MyForm/>
                  <button className={style.btn}>Отправить</button>
              </div>
      </div>
  )
}
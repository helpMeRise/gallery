import React from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './image/login.svg';

export const Auth = props => {
  console.log(style);
  return (
    <button className={style.button}>
      <LoginIcon className={style.icon}/>
    </button>
  );
};

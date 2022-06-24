import React from 'react';
import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './image/unsplash_icon.svg';

export const Logo = props => {
  console.log(style);
  return (
    <a className={style.link} href='/'>
      <LogoIcon width='50' height='50' className={style.logo}/>
    </a>
  );
};

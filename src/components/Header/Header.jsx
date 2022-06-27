import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';

export const Header = props => (
  <header className={style.header}>
    <Layout>
      <div className={style.header__container}>
        <Logo/>
        <Auth/>
      </div>
    </Layout>
  </header>
);

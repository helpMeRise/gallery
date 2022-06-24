import React from 'react';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './image/login.svg';
import { urlAuth } from '../../../api/auth';
import { PropTypes } from 'prop-types';
// import { useAuth } from '../../../hooks/useAuth';

export const Auth = () => {
  // const [auth] = useAuth();
  console.log();
  return (
    <a href={urlAuth} className={style.button}>
      <LoginIcon className={style.icon}/>
    </a>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};

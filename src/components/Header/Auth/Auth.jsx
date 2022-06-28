import React from 'react';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './image/login.svg';
import { urlAuth } from '../../../api/auth';
import { PropTypes } from 'prop-types';
import { useAuth } from '../../../hooks/useAuth';

export const Auth = () => {
  const [auth] = useAuth();
  return (
    <>
      {auth.username ? (
        <div className={style.profile__info}>
          <img src={auth['profile_image'].small}/>
          <span>{auth.username}</span>
        </div>
      ) : (
        <a href={urlAuth} className={style.button}>
          <LoginIcon className={style.icon}/>
        </a>
      )}
    </>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};

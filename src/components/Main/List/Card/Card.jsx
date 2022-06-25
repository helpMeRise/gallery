import React from 'react';
import style from './Card.module.css';
import { PropTypes } from 'prop-types';


export const Card = ({ data }) => {
  console.log(style);
  const {
    name,
    date,
    likes
  } = data;
  return (
    <li className={style.item}>
      <p>{name}</p>
      <p>{date}</p>
      <p>{likes}</p>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};


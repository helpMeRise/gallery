import React from 'react';
import style from './List.module.css';
import { Card } from './Card/Card';

export const List = props => {
  console.log(style);

  const arr = [
    {
      name: 'NAME',
      date: 'date',
      likes: 'likes',
    },
    {
      name: 'NAME',
      date: 'date',
      likes: 'likes',
    },
    {
      name: 'NAME',
      date: 'date',
      likes: 'likes',
    },
    {
      name: 'NAME',
      date: 'date',
      likes: 'likes',
    },
    {
      name: 'NAME',
      date: 'date',
      likes: 'likes',
    },
    {
      name: 'NAME',
      date: 'date',
      likes: 'likes',
    },
  ];

  return (
    <ul className={style.list}>
      {arr.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </ul>
  );
};

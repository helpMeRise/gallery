import React from 'react';
import style from './Main.module.css';
import { Layout } from '../Layout/Layout';
import { List } from './List/List';

export const Main = props => {
  console.log(style);
  return (
    <main>
      <Layout>
        <List/>
      </Layout>
    </main>
  );
};

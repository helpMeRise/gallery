import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { updateToken } from './store/token/tokenReducer';
import { getToken } from './api/token';
import { Main } from './components/Main/Main';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      }>

      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Main } from './components/Main/Main';
import { tokenSlice } from './store/token/tokenSlice';

function App() {
  const dispatch = useDispatch();

  dispatch(tokenSlice.actions.tokenRequest());

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

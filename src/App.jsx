import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { updateToken } from './store/token/tokenReducer';
import { getToken } from './api/token';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
        </>
      }>

      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { tokenSlice } from './store/token/tokenSlice';
import { Main } from './components/Main/Main';
import { PhotoPage } from './components/PhotoPage/PhotoPage';

function App() {
  const dispatch = useDispatch();

  dispatch(tokenSlice.actions.tokenRequest());

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header/>
          <Routes>
            <Route path='/' element={<Navigate to='/photos' replace/>}/>
            <Route path='/auth' element={<Navigate to='/photos' replace/>}/>
            <Route path='/photos' element={<Main/>}/>
            <Route path='/photo/:id' element={<PhotoPage/>}/>
          </Routes>
        </>
      }>
      </Route>
    </Routes>
  );
}

export default App;

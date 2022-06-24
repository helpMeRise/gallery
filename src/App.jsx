import React from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  // const dispatch = useDispatch();

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

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import authReducer from './auth/authSlice';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

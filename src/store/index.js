import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import tokenReducer from './token/tokenSlice';
import authReducer from './auth/authSlice';
import photosReducer from './photos/photosSlice';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    authReducer,
    photosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

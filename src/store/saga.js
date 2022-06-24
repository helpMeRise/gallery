import { all } from 'redux-saga/effects';
import { watchAuth } from './auth/authSaga';


export default function* rootSaga() {
  yield all([
    watchAuth(),
  ]);
}

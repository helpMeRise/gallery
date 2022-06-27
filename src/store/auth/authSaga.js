import { select, call, put, takeEvery } from 'redux-saga/effects';
import { authSlice } from './authSlice';
import axios from 'axios';
import { URL_API } from '../../api/const';


function* fetchAuth() {
  const token = yield select(state => state.tokenReducer.token);
  console.log(token);
  if (!token) return;
  try {
    const request = yield call(axios, `${URL_API}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    yield put(authSlice.actions.authRequestSuccess(request.data));
  } catch (e) {
    yield put(authSlice.actions.authRequestError(e));
  }
}

export function* watchAuth() {
  yield takeEvery(authSlice.actions.authRequest, fetchAuth);
}

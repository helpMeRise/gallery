import { call, put, takeEvery } from 'redux-saga/effects';
import { tokenSlice } from './tokenSlice';
import axios from 'axios';
import { ACCESS_KEY, REDIRECT_URI, SECRET_KEY } from '../../api/const';
import { code } from '../../api/token';


function* fetchToken() {
  if (!code) return;
  try {
    const request = yield call(axios, `https://unsplash.com/oauth/token?client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&grant_type=authorization_code`, {
      method: 'POST',
    });

    yield put(tokenSlice.actions.tokenRequestSuccess(
      request.data['access_token']));
  } catch (e) {
    yield put(tokenSlice.actions.tokenRequestError(e));
  }
}

export function* watchToken() {
  yield takeEvery(tokenSlice.actions.tokenRequest, fetchToken);
}

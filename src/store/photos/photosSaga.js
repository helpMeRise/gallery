import axios from 'axios';
import { ACCESS_KEY, URL_API } from '../../api/const';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { photosSlice } from './photosSlice';

function* fetchPhotos() {
  const token = yield select(state => state.tokenReducer.token);
  try {
    const request = yield call(axios,
      `${URL_API}/photos?client_id=${ACCESS_KEY}`, {
        headers: {
          'Authorization': `bearer ${token}`,
        },
      });

    yield put(photosSlice.actions.photosRequestSuccess(request.data));
  } catch (e) {
    yield put(photosSlice.actions.photosRequestError(e));
  }
}

export function* watchPhotos() {
  yield takeEvery(photosSlice.actions.photosRequest, fetchPhotos);
}

import axios from 'axios';
import { ACCESS_KEY, URL_API } from '../../api/const';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { photosSlice } from './photosSlice';

function* fetchPhotos() {
  const token = yield select(state => state.tokenReducer.token);
  // const isLast = yield select(state => state.postsReducer.isLast);
  const page = yield select(state => state.photosReducer.page);

  try {
    const request = token ? yield call(axios,
      `${URL_API}/photos?page=${page}&per_page=30`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }) : yield call(axios,
        `${URL_API}/photos?page=${page}&per_page=30`, {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
          }
        });

    yield put(photosSlice.actions.photosRequestSuccess(request.data));
    yield put(photosSlice.actions.changePage());
  } catch (e) {
    yield put(photosSlice.actions.photosRequestError(e));
  }
}

export function* watchPhotos() {
  yield takeEvery(photosSlice.actions.photosRequest, fetchPhotos);
}

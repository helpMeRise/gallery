import { call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { ACCESS_KEY, URL_API } from '../../api/const';
import { photoSlice } from './photoSlice';

function* fetchPhoto(id) {
  const token = yield select(state => state.tokenReducer.token);
  try {
    const request = token ? yield call(axios,
      `${URL_API}/photos/${id.payload}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }) : yield call(axios,
        `${URL_API}/photos/${id.payload}?client_id=${ACCESS_KEY}`);

    yield put(photoSlice.actions.photoRequestSuccess(request.data));
  } catch (e) {
    yield put(photoSlice.actions.photosRequestError(e));
  }
}

export function* watchPhoto() {
  yield takeEvery(photoSlice.actions.photoRequest, fetchPhoto);
}


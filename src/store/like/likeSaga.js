import { select, takeEvery, call, put } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import { likeSlice } from './likeSlice';
import axios from 'axios';


function* fetchLike(id) {
  const token = yield select(state => state.tokenReducer.token);
  const like = yield select(state => state.photoReducer.data['liked_by_user']);
  try {
    const request = like ? yield call(axios,
      `${URL_API}/photos/${id.payload}/like`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }) : yield call(axios, `${URL_API}/photos/${id.payload}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    yield put(likeSlice.actions.likeRequestSuccess(request.data));
  } catch (e) {
    yield put(likeSlice.actions.likeRequestError(e));
  }
}

export function* watchLike() {
  yield takeEvery(likeSlice.actions.likeRequest, fetchLike);
}

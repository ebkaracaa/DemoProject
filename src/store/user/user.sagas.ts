import {call, put, takeEvery} from 'redux-saga/effects';
import {UserTokenSuccessResponse} from '../../api/authResponses';
import Api from '../../api/api';
import {failLogin, successLogin} from './user.actions';
import {UserRequestAction, USER_REQUEST} from './user.types';
import {AxiosError} from 'axios';

const isAxiosError = (e: Error): e is AxiosError => 'response' in e;

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: UserRequestAction) {
  try {
    const data: UserTokenSuccessResponse = yield call(
      Api.login,
      action.payload.username,
      action.payload.password,
    );
    yield put(successLogin(data));
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (isAxiosError(e) && e.response?.data) {
        if ('message' in e.response.data) {
          yield put(failLogin(e.response.data));
        } else if ('title' in e.response.data) {
          yield put(failLogin({message: e.response.data.title}));
        } else {
          yield put(failLogin({message: 'login error'}));
        }
      } else {
        yield put(failLogin({message: e.message}));
      }
    } else {
      yield put(failLogin({message: 'unknown error occured'}));
    }
    console.log(e);
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* userSaga() {
  yield takeEvery(USER_REQUEST, fetchUser);
}
export default userSaga;

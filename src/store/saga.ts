import {spawn} from 'redux-saga/effects';
import userSaga from './user/user.sagas';

function* rootSaga() {
  yield spawn(userSaga);
}

export default rootSaga;

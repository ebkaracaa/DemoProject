import {
  UserTokenSuccessResponse,
  UserTokenFailResponse,
} from '../../api/authResponses';
import {
  UserActvAccAction,
  UserFailAction,
  UserRequestAction,
  UserSuccessAction,
  USER_ACTIVATION,
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
} from './user.types';

export const login = (
  username: string,
  password: string,
): UserRequestAction => ({
  type: USER_REQUEST,
  payload: {username, password},
});

export const failLogin = (error: UserTokenFailResponse): UserFailAction => ({
  type: USER_FAIL,
  error: error,
});

export const successLogin = (
  data: UserTokenSuccessResponse,
): UserSuccessAction => ({
  type: USER_SUCCESS,
  payload: data,
});
export const actvAcc = (
  username: string,
  password: string,
): UserActvAccAction => ({
  type: USER_ACTIVATION,
  payload: {username, password},
});

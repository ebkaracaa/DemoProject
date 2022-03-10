import {
  UserTokenSuccessResponse,
  UserTokenFailResponse,
  UserDetailsFailResponse,
  UserDetailsSuccessResponse,
} from '../../api/authResponses';
import {
  UserActvAccAction,
  UserDetailsFailAction,
  UserDetailsRequestAction,
  UserDetailsSuccessAction,
  UserFailAction,
  UserRequestAction,
  UserSuccessAction,
  USER_ACTIVATION,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
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

export const userDetailsRequest = (): UserDetailsRequestAction => ({
  type: USER_DETAILS_REQUEST,
});

export const userDetailsFail = (
  error: UserDetailsFailResponse,
): UserDetailsFailAction => ({
  type: USER_DETAILS_FAIL,
  error,
});

export const userDetailsSuccess = (
  data: UserDetailsSuccessResponse,
): UserDetailsSuccessAction => ({
  type: USER_DETAILS_SUCCESS,
  payload: data,
});

/* export const actvAcc = (
  username: string,
  password: string,
): UserActvAccAction => ({
  type: USER_ACTIVATION,
  payload: {username, password},
}); */

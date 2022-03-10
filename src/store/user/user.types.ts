import {
  UserDetailsFailResponse,
  UserDetailsSuccessResponse,
  UserTokenFailResponse,
  UserTokenSuccessResponse,
} from '../../api/authResponses';

export const USER_REQUEST = 'user/request';
export const USER_FAIL = 'user/fail';
export const USER_SUCCESS = 'user/success';
export const USER_DETAILS_REQUEST = 'user/details/request';
export const USER_DETAILS_FAIL = 'user/details/fail';
export const USER_DETAILS_SUCCESS = 'user/details/success';
export const USER_ACTIVATION = 'user/activation'; //TODO

export interface UserRequestAction {
  type: typeof USER_REQUEST;
  payload: {username: string; password: string};
}
export interface UserFailAction {
  type: typeof USER_FAIL;
  error: UserTokenFailResponse;
}
export interface UserSuccessAction {
  type: typeof USER_SUCCESS;
  payload: UserTokenSuccessResponse;
}

export interface UserDetailsRequestAction {
  type: typeof USER_DETAILS_REQUEST;
}
export interface UserDetailsFailAction {
  type: typeof USER_DETAILS_FAIL;
  error: UserDetailsFailResponse;
}
export interface UserDetailsSuccessAction {
  type: typeof USER_DETAILS_SUCCESS;
  payload: UserDetailsSuccessResponse;
}

export interface UserActvAccAction {
  //TODO
  type: typeof USER_ACTIVATION;
  payload: {username: string; password: string};
}

export type UserAction =
  | UserRequestAction
  | UserFailAction
  | UserSuccessAction
  | UserDetailsRequestAction
  | UserDetailsFailAction
  | UserDetailsSuccessAction
  | UserActvAccAction;

export interface UserState {
  isLogged: boolean;
  data: Partial<UserTokenSuccessResponse & UserDetailsSuccessResponse>;
  error?: UserTokenFailResponse;
}

import {
  UserTokenFailResponse,
  UserTokenSuccessResponse,
} from '../../api/authResponses';

export const USER_REQUEST = 'user/request';
export const USER_FAIL = 'user/fail';
export const USER_SUCCESS = 'user/success';
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
export interface UserActvAccAction {
  //TODO
  tpye: typeof USER_ACTIVATION;
  payload: {username: string; password: string};
}

export type UserAction =
  | UserRequestAction
  | UserFailAction
  | UserSuccessAction
  | UserActvAccAction;

export interface UserState {
  isLogged: boolean;
  data?: UserTokenSuccessResponse;
  error?: UserTokenFailResponse;
}

import {
  UserAction,
  UserState,
  USER_SUCCESS,
  USER_FAIL,
  USER_DETAILS_SUCCESS,
} from './user.types';
const defaultState: UserState = {isLogged: false, data: {}};
const userReducer = (state = defaultState, action: UserAction): UserState => {
  // initial value=false so that the state is not undifined at the start
  switch (action.type) {
    case USER_SUCCESS:
      return {isLogged: false, data: {...state.data, ...action.payload}};
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLogged: true,
        data: {...state.data, ...action.payload},
      };
    case USER_FAIL:
      return {isLogged: false, data: {}, error: action.error};

    default:
      return state;
  }
};
export default userReducer;

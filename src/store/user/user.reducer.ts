import {UserAction, UserState, USER_SUCCESS, USER_FAIL} from './user.types';
const defaultState: UserState = {isLogged: false};
const userReducer = (state = defaultState, action: UserAction): UserState => {
  console.log(action);
  switch (action.type) {
    case USER_SUCCESS:
      return {isLogged: true, data: action.payload};
    case USER_FAIL:
      return {isLogged: false, error: action.error};

    default:
      return state;
  }
};
export default userReducer;

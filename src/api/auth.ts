import store from '../store/store';
import {
  UserDetailsSuccessResponse,
  UserTokenSuccessResponse,
} from './authResponses';
import axios from './axios';

const login = async (username: string, password: string) => {
  const res = await axios.post<UserTokenSuccessResponse>('/api/auth/signin', {
    usernameOrEmail: username,
    password,
  });
  console.log(res?.data);
  return res?.data;
};

const getUserDetails = async () => {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);
  const res = await axios.get<UserDetailsSuccessResponse>('/api/user/me', {
    headers: {Authorization: `Bearer ${token}`},
  });
  console.log(res?.data);
  return res?.data;
};

export default {login, getUserDetails};

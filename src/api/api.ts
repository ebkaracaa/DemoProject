import store from '../store/store';
import {UserTokenSuccessResponse} from './authResponses';
import axios from './axios';
const login = async (username: string, password: string) => {
  const res = await axios.post<UserTokenSuccessResponse>('/api/auth/signin', {
    usernameOrEmail: username,
    password,
  });
  console.log(res?.data);
  return res?.data;
};

const getUsers = async () => {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);

  const res = await axios.get('/api/admin/users', {
    headers: {Authorization: `Bearer ${token}`},
  });
  return res?.data;
};
async function addUser(
  username: string,
  password: string,
  name: string,
  surname: string,
  phoneNumber: string,
  email: string,
  roleId: number,
) {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);
  const res = await axios.post(
    '/api/admin/user',
    {
      name,
      roles: ['2'],
      username,
      email: 'manager@delta.com',
    },
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
  return res?.data;
}

export default {login, getUsers, addUser};

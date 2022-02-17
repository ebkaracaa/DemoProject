import store from '../store/store';
import {UserTokenSuccessResponse} from './authResponses';
import axios from './axios';
const login = async (username: string, password: string) => {
  const res = await axios.post<UserTokenSuccessResponse>('/user/token', {
    username,
    password,
  });
  return res.data;
};

const getUsers = async () => {
  const token = store.getState().user?.data?.token;
  console.log(token);
  const res = await axios.get('/admin/users', {
    headers: {Authorization: `Bearer ${token}`},
  });
  return res.data;
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
  const token = store.getState().user?.data?.token;
  console.log(token);
  const res = await axios.post(
    '/admin/user',
    {
      username: 'EMRE',
      password,
      name,
      surname,
      phoneNumber,
      email: 'manager@delta.com',
      roleId: 2,
    },
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
  return res.data;
}

export default {login, getUsers, addUser};

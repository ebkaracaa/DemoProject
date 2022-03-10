import store from '../store/store';
import axios from './axios';

const getAllUserProfiles = async () => {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);

  const res = await axios.get('/api/admin/users', {
    headers: {Authorization: `Bearer ${token}`},
  });
  return res?.data;
};

async function getUserProfileWithUsername(
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

export default {getAllUserProfiles, getUserProfileWithUsername};

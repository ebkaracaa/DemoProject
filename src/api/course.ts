import store from '../store/store';
import axios from './axios';

const getAllCoursesInStudentsSchool = async () => {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);

  const res = await axios.get('/api/student/courses', {
    headers: {Authorization: `Bearer ${token}`},
  });

  return res?.data;
};

export default {getAllCoursesInStudentsSchool};

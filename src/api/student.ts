import store from '../store/store';
import axios from './axios';

const unenrollFromCourse = async (courseId: number) => {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);

  const res = await axios.delete('/api/student/course/' + courseId, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return res?.data;
};

const enrollToCourse = async (courseId: number) => {
  const token = store.getState().user?.data?.accessToken;
  console.log(`Bearer ${token}`);

  const res = await axios.post(
    '/api/student/course/' + courseId,
    {},
    {
      headers: {Authorization: `Bearer ${token}`},
    },
  );
  return res?.data;
};

export default {unenrollFromCourse, enrollToCourse};

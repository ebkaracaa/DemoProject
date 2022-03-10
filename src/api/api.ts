import admin from './admin';
import auth from './auth';
import course from './course';
import student from './student';

export default {
  ...admin,
  ...auth,
  ...course,
  ...student,
};

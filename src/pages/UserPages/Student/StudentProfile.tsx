import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import api from '../../../api/api';
// IN STUDENTHOME STUDENT CAN SEE HIS/HER ALL CLASSES
export const StudentProfile = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllCoursesInStudentsSchool()
      .then(data => {
        console.log(data);
        setCourses(data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, []);

  const handleEnroll = id => () => {
    console.log('handleEnroll', id);
    api
      .enrollToCourse(id)
      .then(res => {
        console.log('handleEnroll OK', res);
      })
      .catch(err => {
        console.log('handleEnroll NOT', err.response.data);
      });
  };

  const handleUnEnroll = id => () => {
    console.log('handleUnEnroll', id);
    api
      .unenrollFromCourse(id)
      .then(res => {
        console.log('handleUnEnroll OK', res);
      })
      .catch(err => {
        console.log('handleUnEnroll NOT', err.response.data);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>STUDENT PROFILE PAGE </Text>
      <Text>REGISTERED COURSES ARE HERE, CLICK REGISTER TO ADD A COURSE: </Text>
      {courses.map(course => (
        <View
          key={course.id}
          style={{
            width: '100%',
            height: 100,
            marginBottom: 10,
            backgroundColor: 'aqua',
          }}>
          <Text>{JSON.stringify(course)}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
            }}
            onPress={handleEnroll(course.id)}>
            <Text>enroll</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
            }}
            onPress={handleUnEnroll(course.id)}>
            <Text>unenroll</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default StudentProfile;

/* import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
// In StudentProfile student can see his/her registered classes.
export const StudentProfile = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>STUDENT Profile PAGE </Text>
      <Text>MY COURSES: </Text>
    </View>
  );
};

export default StudentProfile;
 */

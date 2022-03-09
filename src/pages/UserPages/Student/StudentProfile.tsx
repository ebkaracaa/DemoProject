import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
// IN STUDENTHOME STUDENT CAN SEE HIS/HER ALL CLASSES
export const StudentProfile = () => {
  const [text, onChangeText] = React.useState('');
  const students = ['a', 'b', 'c', 'd'];
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>STUDENT PROFILE PAGE </Text>
      <Text>REGISTERED COURSES ARE HERE, CLICK REGISTER TO ADD A COURSE: </Text>
      {students.map(student => (
        <View
          style={{
            width: 80,
            height: 40,
            marginBottom: 10,
            backgroundColor: 'aqua',
          }}>
          <Text>{student}</Text>
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

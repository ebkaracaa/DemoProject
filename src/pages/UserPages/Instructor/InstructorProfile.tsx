import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
// In InstructorHome Instructor can add new course.
export const InstructorHome = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Instructor Profile </Text>
      <Text>Given Courses:</Text>
      <Text>DELETE COURSE: </Text>
    </View>
  );
};

export default InstructorHome;

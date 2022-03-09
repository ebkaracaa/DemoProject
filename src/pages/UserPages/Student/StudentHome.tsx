import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
// IN STUDENTHOME STUDENT CAN SEE HIS/HER ALL CLASSES
export const StudentHome = () => {
  const [text, onChangeText] = React.useState('');
  const students = ['a', 'b', 'c', 'd'];
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>STUDENT HOME PAGE </Text>
      <Text>ALL COURSES ARE HERE CLICK REGISTER TO ADD A COURSE: </Text>
      {students.map(student => (
        <View
          style={{
            width: 70,
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

export default StudentHome;

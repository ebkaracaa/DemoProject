import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import api from '../../api/api';

export const Home = () => {
  const [text, onChangeText] = React.useState('');
  const getUserf = () => {
    api.getUsers().then(res => console.log(res));
  };
  const addUser = async () => {
    const response = await api.addUser(
      'EMRE',
      'PASSSSSS',
      'ASD',
      'ASD',
      'ASD',
      'ASD',
      999,
    );
    console.log(JSON.stringify(response));
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>BURASI ANA SAYFA </Text>
      <TouchableOpacity onPress={() => getUserf()}>
        <Text>Get User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addUser()}>
        <Text>Add User</Text>
      </TouchableOpacity>
      <TextInput onChangeText={onChangeText} value={text} />
    </View>
  );
};

export default Home;

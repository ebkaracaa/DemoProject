import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {login, actvAcc} from '../../store/user/user.actions';
import styles from './loginStyles';

export const Login = () => {
  const dispatch = useDispatch();

  /* export const ActivateAcc = () => {
  const dispatch = useDispatch(); */

  const [email, setEmail] = useState('gülsümkılıç');
  const [password, setPassword] = useState('gülsüm123');

  const onLogin = () => {
    dispatch(login(email, password));
  };
  const onActvAcc = () => {
    dispatch(actvAcc(email, password));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Demo Project</Text>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activateBtn} onPress={onActvAcc}>
        <Text style={styles.activateAccText}>Activate Account</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

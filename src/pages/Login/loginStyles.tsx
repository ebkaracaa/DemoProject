import {StyleSheet} from 'react-native';

const loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    marginBottom: 60,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#F3F0EE',
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginText: {
    color: '#F3F0EE',
  },
  activateAccText: {
    color: '#F3F0EE',
  },
  loginBtn: {
    width: '50%',
    backgroundColor: '#228cdc',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  activateBtn: {
    width: '50%',
    backgroundColor: '#228cdc',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
export default loginstyles;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
//import Profile from './src/pages/Profile';
//import Splash from './src/pages/Splash';
import {Provider, useSelector} from 'react-redux';
import store from './src/store/store';
import Profile from './src/pages/Profile';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
//const MainStack = createNativeStackNavigator();

export function StackNavigator() {
  const isLogged = useSelector(state => state.user.isLogged);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? ( //PAGES FOR LOGGED IN USERS
          <>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="user"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </>
        ) : (
          // AUTH PAGE
          <>
            <Tab.Screen name="Login" component={Login} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

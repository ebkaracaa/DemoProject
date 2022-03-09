import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import {Provider, useSelector} from 'react-redux';
import store from './src/store/store';
import Profile from './src/pages/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from './src/navigation/TabNavigation';
import StudentHome from './src/pages/UserPages/Student/StudentHome';
import StudentProfile from './src/pages/UserPages/Student/StudentProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function StackNavigator() {
  const isLogged = useSelector(state => state.user.isLogged);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? ( // login successfull => directed to the related stack.
          <Stack.Screen name="Home" component={StackRolePages()} />
        ) : (
          // login fail => try again,AUTH PAGE
          <>{AuthStack()}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function AuthStack() {
  return <Stack.Screen name="Login" component={Login} />;
}

function StudentStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="StudentHomePage"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'All Classess',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="StudentProfilePage"
        component={StudentProfile}
        options={{
          headerShown: false,
          tabBarLabel: 'My Classess',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function InstructorStack() {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="InstructorHomePage" component={InstructorHome} />
      <Tab.Screen name="InstructorProfilePage" component={InstructorProfile} />
    </Tab.Navigator>
  );
}
function SchoolManagerStack() {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="SchoolManagerHome" component={SchoolManagerHome} />
      <Tab.Screen
        name="SchoolManagerProfile"
        component={SchoolManagerProfile}
      />
    </Tab.Navigator>
  );
}
function AdminStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={Home} />
      <Tab.Screen name="AdminProfilePage" component={Profile} />
    </Tab.Navigator>
  );
}

const StackRolePages = () => {
  let role = 'Student';
  switch (role) {
    case 'Student':
      return StudentStack;
    case 'Instructor':
      return InstructorStack;
    case 'SchoolManager':
      return SchoolManagerStack;
    case 'Admin':
      return AdminStack;
  }
  return <></>;
};
export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

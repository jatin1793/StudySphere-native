import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import HomePage from './components/Tabs/HomePage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LikedLectures from './components/Tabs/LikedLectures';
import EnrolledCourses from './components/Tabs/EnrolledCourses';
import Account from './components/Tabs/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Foundation'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import CoursePage from './components/Course/CoursePage';
import CourseVideo from './components/Course/CourseVideo';
import { useDispatch, useSelector } from 'react-redux';
import { Get_student_home, Student_details } from './utils/axios';
import { userData } from './store/reducers/userSlice';
import { courses } from './store/reducers/enrolledCoursesSlice';
import EditProfile from './components/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Dashboard') {
            return <Icon2 name='home' size={size} color={color} />
          } else if (route.name === 'Liked Videos') {
            return <Icon name='heart-sharp' size={size} color={color} />
          } else if (route.name === 'Enrolled Courses') {
            return <Icon name='bookmark' size={size} color={color} />
          } else if (route.name === 'Profile') {
            return <Icon name='person' size={size} color={color} />
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={HomePage} />
      <Tab.Screen name="Liked Videos" component={LikedLectures} />
      <Tab.Screen name="Enrolled Courses" component={EnrolledCourses} />
      <Tab.Screen name="Profile" component={Account} />
    </Tab.Navigator>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const res = await Student_details();
      dispatch(userData(res))
      dispatch(courses(res.joinedcourses))
    }
    getUser();
  }, [])


  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('student_token');
        setInitialRoute(token ? 'HomeScreens' : 'Login');
      } catch (error) {
        console.error('Failed to fetch the token:', error);
        setInitialRoute('Login');
      }
    };
    fetchToken();
  }, []);

  if (initialRoute === null) return null;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="HomeScreens" component={Tabs} />
          <Stack.Screen name='Course' component={CoursePage} />
          <Stack.Screen name='Video' component={CourseVideo} />
          <Stack.Screen name='EditProfile' component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;

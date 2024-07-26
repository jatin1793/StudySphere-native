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
import { Button, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Favourites') {
            iconName = 'heart-outline';
          } else if (route.name === 'Enrolled') {
            iconName = 'list-outline';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
        },
        tabBarItemStyle: {
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
          marginBottom: 5
        },
        tabBarIconStyle: {
          marginTop: 10
        },
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Favourites" component={LikedLectures} />
      <Tab.Screen
        name="Enrolled"
        component={EnrolledCourses}
        // options={({ navigation }) => ({
        //   headerLeft: () => (
            // <TouchableOpacity onPress={() => navigation.goBack()} style={{marginHorizontal: 30}}>
            //   <Icon name="arrow-left" size={20} color='blue' />
            // </TouchableOpacity>
        //   ),
        //   headerTransparent: true
        // })}
         />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('student_token');
        setInitialRoute(token ? 'Home' : 'AuthStack');
      } catch (error) {
        console.error('Failed to fetch the token:', error);
        setInitialRoute('AuthStack');
      }
    };
    fetchToken();
  }, []);

  if (initialRoute === null) return null;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <Stack.Screen name="AuthStack" options={{ headerShown: false }}>
            {() => (
              <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </Stack.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {() => <HomeTabs />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;

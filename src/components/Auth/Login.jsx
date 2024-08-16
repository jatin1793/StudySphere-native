import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { Login } from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Studentlogin = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [btnloading, setbtnloading] = useState(false)

  async function loginStudent() {
    const { phone, email, name, password, institution, qualification, course } = inputs;
    setbtnloading(true)

    if (
      !email ||
      !password
    ) {
      Toast.show({ type: 'error', text1: 'Fill in all required fields!' });
    } else if (email.length > 30 || email.length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Email should be in range of 10 to 30 characters.',
      });
    } else if (password.length > 15 || password.length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Password should be in range of 3 to 15 characters.',
      });
    } else {
      try {
        const response = await Login({ email, password });
        if (response.data.student_token) {
          Toast.show({
            type: 'success',
            text1: 'Logged in successfully!',
          });
          AsyncStorage.setItem(
            'student_user',
            JSON.stringify(response.data.user),
          );
          AsyncStorage.setItem(
            'student_token',
            JSON.stringify(response.data.student_token),
          );
          navigation.navigate("HomeScreens")
        }
        if (!response.data.StudentExists && !response.data.passCheck) {
          Toast.show({
            type: 'error',
            text1: 'Student doesnt exists with this email !',
          });
        }
        else if (response.data.StudentExists && !response.data.passCheck) {
          Toast.show({
            type: 'error',
            text1: 'Incorrect password !',
          });
        }
      } catch (error) {
        setbtnloading(false)
        console.error(error);
      }
    }
    setbtnloading(false)
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#ff723f" />;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
      }}>
      <View style={{ width: '100%', height: "100%", paddingVertical: 15, paddingHorizontal: 14, display: "flex", flexDirection: "column", gap: 50 }}>
        <View>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{ height: 40, width: 80 }}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: "70%" }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              marginBottom: 30,
            }}>
            <Text style={{ fontSize: 24, fontWeight: 800, color: 'black' }}>
              Welcome back
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 400, color: 'black' }}>
              Please login to your account
            </Text>
          </View>

          <TextInput
            placeholder="Enter your email Address"
            keyboardType="email-address"
            onChangeText={value => setInputs({ ...inputs, email: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />

          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={value => setInputs({ ...inputs, password: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />

          <TouchableOpacity
            onPress={loginStudent}
            style={{
              backgroundColor: '#ff723f',
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              marginTop: 10,
            }}>
            {btnloading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={{ color: 'white' }}>Login</Text>
            )}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{ color: 'gray' }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: '#ff723f' }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ff723f',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: 'black',
  },
});

export default Studentlogin;

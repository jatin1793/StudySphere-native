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
import baseUrl, { Signup } from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Studentsignin = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    phone: '',
    email: '',
    name: '',
    password: '',
    institution: '',
    qualification: '',
    course: '',
  });
  const [btnloading, setbtnloading] = useState(false)

  async function registerStudent() {
    const { phone, email, name, password, institution, qualification, course } = inputs;
    setbtnloading(true)

    if (
      !phone ||
      !email ||
      !name ||
      !password ||
      !institution ||
      !qualification ||
      !course
    ) {
      Toast.show({ type: 'error', text1: 'Fill in all required fields!' });
    } else if (phone.length !== 10) {
      Toast.show({
        type: 'error',
        text1: 'Phone number should be of 10 digits.',
      });
    } else if (email.length > 30 || email.length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Email should be in range of 10 to 30 characters.',
      });
    } else if (name.length > 15 || name.length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Name should be in range of 3 to 15 characters.',
      });
    } else if (password.length > 15 || password.length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Password should be in range of 3 to 15 characters.',
      });
    } else {
      try {
        const response = await Signup({ phone, email, name, password, institution, qualification, course});
        if (response.data.alreadyExists) {
          Toast.show({
            type: 'error',
            text1: 'Student with this email already exists!',
          });
        } else {
          Toast.show({
            type: 'success',
            text1: 'Student registered successfully!',
          });
          AsyncStorage.setItem(
            'student_user',
            JSON.stringify(response.data.user),
          );
          AsyncStorage.setItem(
            'student_token',
            JSON.stringify(response.data.student_token),
          );
          navigation.navigate("Home")
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

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              marginBottom: 20,
            }}>
            <Text style={{ fontSize: 24, fontWeight: 800, color: 'black' }}>
              Create an account
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 400, color: 'black' }}>
              Let's get you started
            </Text>
          </View>
          <TextInput
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            onChangeText={value => setInputs({ ...inputs, phone: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />
          <TextInput
            placeholder="Enter your email Address"
            keyboardType="email-address"
            onChangeText={value => setInputs({ ...inputs, email: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />
          <TextInput
            placeholder="Enter your name"
            onChangeText={value => setInputs({ ...inputs, name: value })}
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
          <TextInput
            placeholder="Enter your institution name"
            onChangeText={value => setInputs({ ...inputs, institution: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />
          <TextInput
            placeholder="Enter your qualification"
            onChangeText={value => setInputs({ ...inputs, qualification: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />
          <TextInput
            placeholder="Enter your course"
            onChangeText={value => setInputs({ ...inputs, course: value })}
            style={styles.input}
            placeholderTextColor="gray"
          />

          <TouchableOpacity
            onPress={registerStudent}
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
              <Text style={{ color: 'white' }}>Register</Text>
            )}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{ color: 'gray' }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: '#ff723f' }}>Login</Text>
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

export default Studentsignin;

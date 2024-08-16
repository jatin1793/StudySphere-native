import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ScreenHeader from '../ScreenHeader';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import theme from '../../theme/Colors';
import { clearuserData } from '../../store/reducers/userSlice';

const Account = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.userdata);
  const [showLogoutModal, setshowLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const logOut = async () => {
    await AsyncStorage.removeItem("student_token");
    navigation.navigate('Login');
    setshowLogoutModal(false);
    dispatch(clearuserData());
    Toast.show({
      type: 'success',
      text1: 'Log out successful!',
    });
  };

  return (
    <View>
      <ScreenHeader title="Profile" />
      <View style={{ height: "90%", padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('EditProfile')}>
          <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 17, display: 'flex', flexDirection: 'row', gap: 25 }}>
            <Image
              source={{ uri: user?.profileimg }}
              style={{ height: 80, width: 80, borderRadius: 100 }}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 180 }}>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: "Poppins-Medium" }}>{user?.name}</Text>
                <Text style={{ color: 'gray', fontSize: 15, fontFamily: "Poppins-Medium" }}>Edit Profile</Text>
              </View>
              <View>
                <Icon name='chevron-thin-right' size={20} color={theme.colors.sec} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={{ fontSize: 20, color: theme.colors.ter, fontFamily: 'Poppins-Medium', marginBottom: 10 }}>Profile Info</Text>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {Object.keys(user)
              .filter(key => !["_id", "token", "password", "profileimg", "joinedcourses", "following", "likedvideos", "__v"].includes(key))
              .map((key, index) => (
                <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>{key}</Text>
                  <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Medium' }}>{user[key].toString()}</Text>
                </View>
              ))}
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 20, color: theme.colors.ter, fontFamily: 'Poppins-Medium', marginBottom: 10 }}>General</Text>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>Theme</Text>
              <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Medium' }}>Light</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setshowLogoutModal(true)} activeOpacity={0.6} style={{ marginBottom: 25, backgroundColor: theme.colors.pri, paddingVertical: 18, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Log out</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showLogoutModal}
          onRequestClose={() => {
            setshowLogoutModal(!showLogoutModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ color: theme.colors.ter, fontSize: 20, fontFamily: 'Poppins-Medium' }}>Log out</Text>
              <Text style={{ color: theme.colors.ter, fontSize: 15, marginVertical: 10 }}>Log out from Study Sphere?</Text>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                <TouchableOpacity onPress={() => setshowLogoutModal(!showLogoutModal)} >
                  <Text style={{ color: theme.colors.ter, fontSize: 15 }}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={logOut} >
                  <Text style={{ color: theme.colors.pri, fontSize: 15 }}>Log out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});

export default Account;

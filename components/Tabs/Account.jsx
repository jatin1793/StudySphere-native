import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Account</Text>
      <Button title='Log out'
      onPress={()=>{
        const res = AsyncStorage.removeItem("student_token");
        navigation.navigate('Login')
        return Toast.show({
          type: 'success',
          text1: 'Log out successfull !',
        });
      }} />
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})
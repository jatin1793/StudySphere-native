import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/Colors';


const ScreenHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30, paddingVertical: 25 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 30 }}>
          <Icon name="chevron-thin-left" size={30} color={Colors.pri} />
        </TouchableOpacity>

        <Text style={{ color: 'black', fontSize: 20 , fontFamily: "Poppins-Medium" }}>{title}</Text>
      </View>
    </View>
  )
}

export default ScreenHeader
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import ScreenHeader from './ScreenHeader'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Entypo'
import theme from '../theme/Colors'
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { Set_student_profileimg, Update_student_profile } from '../utils/axios'
import { userData } from '../store/reducers/userSlice'

const EditProfile = () => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.user.userdata);
    const dispatch = useDispatch();

    const [userdets, setuserdets] = useState({
        name: user?.name,
        phone: user?.phone,
        institution: user?.institution,
        qualification: user?.qualification,
        course: user?.course
    })

    const editProfile = async (data) => {
        const res = await Update_student_profile(data);
        dispatch(userData(res))
        navigation.navigate('Profile')
        if(res){
            return Toast.show({
                type: 'success',
                text1: 'Profile updated successfully !',
            });
        }
    }

    const pickDocument = async () => {
        try {
            const form = new FormData();
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles],
            });
            if (result) {
                await RNFS.readFile(result.uri, 'base64').then(data => {
                    form.append("file", data)
                    Set_student_profileimg({ formData: form })
                        .then((res) => {
                            // console.log("res --> ", res)
                        })
                        .catch((err) => {
                            console.log("err --> ", err)
                        })
                });
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log(err)
            } else {
                console.log(err)
            }
            return Toast.show({
                type: 'error',
                text1: 'Something went wrong !',
            });
        }
    };

    return (
        <View>
            <ScreenHeader title="Edit Profile" />
            <View style={{ height: "90%", padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 17, display: 'flex', flexDirection: 'row', gap: 25 }}>
                    <TouchableOpacity onPress={pickDocument}>
                        <Image
                            source={{ uri: user?.profileimg }}
                            style={{ height: 80, width: 80, borderRadius: 100 }}
                        />
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '70%' }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 180 }}>
                            <Text style={{ color: 'black', fontSize: 20, fontFamily: "Poppins-Medium" }}>{user?.name}</Text>
                            <Text style={{ fontSize: 12, color: 'black', fontFamily: 'Poppins-Regular' }}>{user?.email}</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 20, color: theme.colors.ter, fontFamily: 'Poppins-Medium', marginBottom: 10 }}>Edit Profile</Text>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>username</Text>
                            <TextInput
                                defaultValue={user?.name}
                                keyboardType="text"
                                onChangeText={value => setuserdets({ ...userdets, name: value })}
                                style={styles.input}
                                placeholderTextColor="gray"
                            />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>phone</Text>
                            <TextInput
                                defaultValue={user.phone?.toString()}
                                keyboardType="phone-pad"
                                onChangeText={value => setuserdets({ ...userdets, phone: value })}
                                style={styles.input}
                                placeholderTextColor="gray"
                            />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>institution</Text>
                            <TextInput
                                defaultValue={user?.institution}
                                keyboardType="text"
                                onChangeText={value => setuserdets({ ...userdets, institution: value })}
                                style={styles.input}
                                placeholderTextColor="gray"
                            />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>qualification</Text>
                            <TextInput
                                defaultValue={user?.qualification}
                                keyboardType="text"
                                onChangeText={value => setuserdets({ ...userdets, qualification: value })}
                                style={styles.input}
                                placeholderTextColor="gray"
                            />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: theme.colors.sec, fontFamily: 'Poppins-Regular', textTransform: 'capitalize' }}>course</Text>
                            <TextInput
                                defaultValue={user?.course}
                                keyboardType="text"
                                onChangeText={value => setuserdets({ ...userdets, course: value })}
                                style={styles.input}
                                placeholderTextColor="gray"
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => editProfile(userdets)} activeOpacity={0.6} style={{ marginBottom: 25, backgroundColor: theme.colors.pri, paddingVertical: 18, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Save Changes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
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
    },
    input: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },
});

export default EditProfile


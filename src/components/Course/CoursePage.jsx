import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScreenHeader from '../ScreenHeader';
import { Get_student_course } from '../../utils/axios';
import Toast from 'react-native-toast-message';
import { TruncatedText } from '../../utils/handleBigPara';

const styles = StyleSheet.create({
    scrollbox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    card: {
        overflow: 'hidden',
        margin: 8,
        borderColor: "black",
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        objectFit: "cover"
    },
    info: {
        paddingVertical: 5,
    },
    courseName: {
        fontSize: 28,
        fontFamily: "Poppins-Bold",
        color: '#000',
        marginBottom: 4,
        width: 300
    },
    courseLength: {
        fontSize: 12,
        fontWeight: '500',
        color: '#666',
    },
    button: {
        backgroundColor: '#ff723f',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
})

const CoursePage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { courseId } = route.params;
    const [course, setcourse] = useState()

    useEffect(() => {
        const getCoursDetails = async () => {
            try {
                const res = await Get_student_course({ id: courseId })
                setcourse(res)
            }
            catch (error) {
                console.log(error);
                return Toast.show({
                    type: 'error',
                    text1: 'Password should be in range of 3 to 15 characters.',
                });
            }
        }
        getCoursDetails();
    }, [courseId])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScreenHeader title="Details" />

            {!course ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={50} color="#ff723f" />
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ padding: 10 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <View>
                                <Text style={styles.courseName}>{course?.courseTitle}</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 50, marginTop: 10 }}>
                                    <Text style={{ fontSize: 15, color: '#666', fontFamily: 'Poppins-Regular' }}>{course?.enrolledStudents?.length} enrolled</Text>
                                    <Text style={{ fontSize: 15, color: '#666', fontFamily: 'Poppins-Regular' }}>{course?.courseDomain}</Text>
                                </View>
                            </View>

                            {course?.coursePoster ? (
                                <Image
                                    source={{ uri: course.coursePoster }}
                                    style={styles.image}
                                />
                            ) : (
                                <Text style={{ fontSize: 15, color: 'red', fontFamily: 'Poppins-Regular' }}>Image not available</Text>
                            )}

                            <View>
                                <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Poppins-Medium' }}>Description</Text>
                                <TruncatedText text={course?.courseDescription} styles={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Regular' }} />
                            </View>

                            <View>
                                <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Poppins-Medium' }}>{course?.courseVideos?.length} Lectures</Text>
                                <View style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
                                    {course?.courseVideos?.map((item) => {
                                        return (
                                            <TouchableOpacity key={item._id} onPress={() => navigation.navigate('Video', { "videoId": item._id })}>
                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                                                    <Icon name="play-circle" color="black" size={40} />
                                                    <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Regular', width: '80%' }}>{item.videotitle}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Enroll Course Now</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    )
}

export default CoursePage

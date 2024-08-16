import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { Get_student_home } from '../../utils/axios';
import theme from '../../theme/Colors';

const styles = StyleSheet.create({
  scrollbox: {
    display: 'flex',
    flexDirection: 'row',
  }
})

const HomePage = () => {

  const user = useSelector((state) => state.user.userdata);
  const enrolledCourses = useSelector((state) => state.enrolledCourses.courses);
  const [allcourses, setallcourses] = useState()
  const [allinstructors, setallinstructors] = useState()

  useEffect(() => {
    const getCourses = async () => {
      const res = await Get_student_home();
      setallcourses(res.courses)
      setallinstructors(res.instructors)
    }
    getCourses();
  }, [])

  return (

    <ScrollView>
      <SafeAreaView style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, paddingVertical: 10, paddingLeft: 10 }}>

        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', paddingRight: 10, justifyContent: "space-between", alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: theme.colors.sec, fontSize: 25, fontFamily: "Poppins-Regular" }}>Hello, </Text>
            <Text style={{ color: theme.colors.pri, fontSize: 25, fontFamily: "Poppins-Bold" }}>{user?.name.split(' ')[0]}</Text>
          </View>

          {
            user?.profileimg &&
            <Image
              source={{ uri: user?.profileimg }}
              style={{ height: 50, width: 50, borderRadius: 100 }}
            />
          }
        </View>

        <View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: 'white',
            marginRight: 10
          }}>
            <Icon name="search" size={20} color="#000" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Search Course"
              style={{
                color: 'gray',
                fontFamily: "Poppins-Regular",
                marginRight: 30,
                flex: 1
              }}
              placeholderTextColor="gray"
            />
          </View>
        </View>

        {!user && !allcourses && !allinstructors ? (
          <View style={{ flex: 1, height: 500, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={50} color="#ff723f" />
          </View>
        ) : (
          <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <View>
              <Text style={{ color: theme.colors.pri, fontSize: 24, paddingVertical: 5, fontFamily: "Poppins-Bold" }}>Popular Courses</Text>
              <FlatList 
                data={allcourses}
                keyExtractor={(item) => item._id}
                horizontal={true}
                renderItem={({item}) => (
                  <CourseCard
                    courseposter={item.coursePoster}
                    coursename={item.courseTitle}
                    instructor={item.courseDomain}
                    courselength={item.courseVideos.length}
                    courseid={item._id}
                  />
                )}
              />
              <View>
              </View>
            </View>

            <View>
              <Text style={{ color: theme.colors.pri, fontSize: 24, paddingVertical: 5, fontFamily: "Poppins-Bold" }}>Mentor of the Weeks</Text>
              <FlatList 
                data={allinstructors}
                keyExtractor={(item) => item._id}
                horizontal={true}
                renderItem={({item}) => (
                  <View key={item._id} style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 17, display: 'flex', flexDirection: 'row', gap: 8 }}>
                    <Image
                      source={{ uri: item.profileimg }}
                      style={{ height: 40, width: 40, borderRadius: 100 }}
                    />
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 180 }}>
                      <Text style={{ color: 'black', fontSize: 15, fontFamily: "Poppins-Medium" }}>{item.name}</Text>
                      <Text style={{ color: 'gray', fontSize: 12, fontFamily: "Poppins-Medium" }}>⭐ 4.9 (1,433 Review)</Text>
                    </View>
                  </View>
                )}
              />
              <View>
              </View>
            </View>

            <View>
              <Text style={{ color: theme.colors.pri, fontSize: 24, paddingVertical: 5, fontFamily: "Poppins-Bold" }}>My Courses</Text>
              <FlatList 
                data={enrolledCourses}
                keyExtractor={(item) => item._id}
                horizontal={true}
                renderItem={({item}) => (
                  <CourseCard
                    courseposter={item.coursePoster}
                    coursename={item.courseTitle}
                    instructor={item.courseDomain}
                    courselength={item.courseVideos.length}
                    courseid={item._id}
                  />
                )}
              />
              <View>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomePage
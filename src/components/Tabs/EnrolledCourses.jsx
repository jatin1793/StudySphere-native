import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import ScreenHeader from '../ScreenHeader';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../utils/GlobalStyles';

const EnrolledCourses = () => {
  const navigation = useNavigation();
  const EnrolledCourses = useSelector((state) => state?.user?.userdata?.joinedcourses)

  return (
    <View>
      <ScreenHeader title='Enrolled Courses' />
      <ScrollView style={{ height: "90%" }}>
        <FlatList
          data={EnrolledCourses}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity key={item._id} style={{ padding: 10 }} activeOpacity={0.6} onPress={() => navigation.navigate('Course', { courseId: item._id })}>
              <View style={styles.card}>
                <Image source={{ uri: item.coursePoster }} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.courseName}>{item?.courseTitle}</Text>
                  <Text style={styles.instructor}>{item?.courseDomain}</Text>
                  <Text style={styles.courseLength}>{item?.courseVideos?.length} Lectures </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 10 }}
          ListEmptyComponent={
            <View style={[globalStyles.screenHeight, {flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}]}>
              <Text style={{ fontSize: 16, color: "gray" }}>You are not enrolled in any of the courses</Text>
            </View>
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: "100%",
    borderRadius: 17,
    backgroundColor: 'white',
    marginRight: 10
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 17,
    objectFit: "cover"
  },
  info: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  courseName: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: 'black',
  },
  instructor: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: '#abb1bc',
  },
  courseLength: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: '#abb1bc',
  },
  button: {
    backgroundColor: '#ff723f',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: "uppercase"
  },
});

export default EnrolledCourses;

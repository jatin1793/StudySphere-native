import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CourseCard from '../CourseCard'
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

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
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.5,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: "uppercase"
  },
})

const EnrolledCourses = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30, paddingVertical: 25 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 30 }}>
          <Icon name="chevron-thin-left" size={30} color='blue' />
        </TouchableOpacity>

        <Text style={{ color: 'black', fontSize: 20 , fontFamily: "Poppins-Medium" }}>Enrolled Courses</Text>
      </View>

      <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: 10 }}>
          <View style={styles.card}>
            <Image source={{ uri: "http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg" }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.courseName}>React Full Course</Text>
              <Text style={styles.instructor}>Dann Michael </Text>
              <Text style={styles.courseLength}>6 Lectures </Text>
            </View>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Watch now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: 10 }}>
          <View style={styles.card}>
            <Image source={{ uri: "http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg" }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.courseName}>React Full Course</Text>
              <Text style={styles.instructor}>Dann Michael </Text>
              <Text style={styles.courseLength}>6 Lectures </Text>
            </View>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Watch now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: 10 }}>
          <View style={styles.card}>
            <Image source={{ uri: "http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg" }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.courseName}>React Full Course</Text>
              <Text style={styles.instructor}>Dann Michael </Text>
              <Text style={styles.courseLength}>6 Lectures </Text>
            </View>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Watch now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: 10 }}>
          <View style={styles.card}>
            <Image source={{ uri: "http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg" }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.courseName}>React Full Course</Text>
              <Text style={styles.instructor}>Dann Michael </Text>
              <Text style={styles.courseLength}>6 Lectures </Text>
            </View>

            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Watch now</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default EnrolledCourses
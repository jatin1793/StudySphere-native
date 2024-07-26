import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import CourseCard from '../CourseCard'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  scrollbox: {
    display: 'flex',
    flexDirection: 'row',
  }
})

const HomePage = () => {
  return (

    <ScrollView>
      <SafeAreaView style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, paddingVertical: 10, paddingLeft: 10 }}>

        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', paddingRight: 10, justifyContent: "space-between", alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ color: '#77787a', fontSize: 25, fontFamily: "Poppins-Regular" }}>Hello,</Text>
            <Text style={{ color: '#42455E', fontSize: 25, fontFamily: "Poppins-Bold" }}> Jhony</Text>
          </View>

          <Image
            source={require('../../assets/images/both2.png')}
            style={{ height: 50, width: 50, borderRadius: 100 }}
          />
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

        <View>
        </View>

        <View>
          <Text style={{ color: '#42455E', fontSize: 24, paddingVertical: 5, fontFamily: "Poppins-Bold" }}>Popular Courses</Text>
          <ScrollView style={styles.scrollbox} horizontal={true}>
            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>

            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>

            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>

            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>
          </ScrollView>
          <View>
          </View>
        </View>

        <View>
          <Text style={{ color: '#42455E', fontSize: 24, paddingVertical: 5, fontFamily: "Poppins-Bold" }}>Mentor of the Weeks</Text>
          <ScrollView style={styles.scrollbox} horizontal={true}>
            <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 17, display: 'flex', flexDirection: 'row', gap: 8 }}>
              <Image
                source={require('../../assets/images/both2.png')}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 180 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: "Poppins-Medium" }}>Nicholas Doflamingo</Text>
                <Text style={{ color: 'gray', fontSize: 12, fontFamily: "Poppins-Medium" }}>⭐ 4.9 (1,433 Review)</Text>
              </View>
            </View>

            <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 17, display: 'flex', flexDirection: 'row', gap: 8 }}>
              <Image
                source={require('../../assets/images/both2.png')}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 180 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: "Poppins-Medium" }}>Nicholas Doflamingo</Text>
                <Text style={{ color: 'gray', fontSize: 12, fontFamily: "Poppins-Medium" }}>⭐ 4.9 (1,433 Review)</Text>
              </View>
            </View>

            <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 17, display: 'flex', flexDirection: 'row', gap: 8 }}>
              <Image
                source={require('../../assets/images/both2.png')}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 180 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: "Poppins-Medium" }}>Nicholas Doflamingo</Text>
                <Text style={{ color: 'gray', fontSize: 12, fontFamily: "Poppins-Medium" }}>⭐ 4.9 (1,433 Review)</Text>
              </View>
            </View>

          </ScrollView>
          <View>
          </View>
        </View>

        <View>
          <Text style={{ color: '#42455E', fontSize: 24, paddingVertical: 5, fontFamily: "Poppins-Bold" }}>My Courses</Text>
          <ScrollView style={styles.scrollbox} horizontal={true}>
            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>

            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>

            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>

            <View>
              <CourseCard
                courseposter="http://res.cloudinary.com/dkq3rjqzc/image/upload/v1709534286/leljnxbnq8npctjkhcsl.jpg"
                coursename="React Full course"
                instructor="Kuhu Patel"
                courselength={9}
              />
            </View>
          </ScrollView>
          <View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomePage
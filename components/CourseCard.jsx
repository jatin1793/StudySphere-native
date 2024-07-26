import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CourseCard = ({courseposter, coursename, instructor, courselength}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: courseposter }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.courseName}>{coursename}</Text>
        <Text style={styles.instructor}>By {instructor} </Text>
        <Text style={styles.courseLength}>{courselength} Lectures </Text>
      </View>

      {/* <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Watch now</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: 230,
    borderRadius: 17,
    backgroundColor: 'white',
    marginRight: 10
  },
  image: {
    width: '100%',
    height: 144,
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
    color:'#abb1bc',
  },
  courseLength: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color:'#abb1bc',
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

export default CourseCard;

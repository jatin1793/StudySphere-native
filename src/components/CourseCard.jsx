import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import theme from '../theme/Colors';

const CourseCard = ({ courseposter, coursename, instructor, courselength, courseid }) => {
  const navigation = useNavigation();


  return (

    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Course', { courseId: courseid })}>
      <View style={styles.card}>
        {
          courseposter &&
          <Image source={{ uri: courseposter }} style={styles.image} />
        }
        <View style={styles.info}>
          <Text style={styles.courseName}>{coursename}</Text>
          <Text style={styles.instructor}>{instructor} </Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Icon name='play-circle-sharp' color={theme.colors.pri} size={20} />
            <Text style={styles.courseLength}>{courselength} lectures </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: 230,
    height: 275,
    borderRadius: 17,
    backgroundColor: 'white',
    marginRight: 10
  },
  image: {
    width: '100%',
    height: 150,
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

export default CourseCard;

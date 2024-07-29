import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ScreenHeader from '../ScreenHeader';
import { useSelector } from 'react-redux';
import Video from 'react-native-video';

const LikedLectures = () => {
  const navigation = useNavigation();
  const LikedLectures = useSelector((state) => state?.user?.userdata?.likedvideos)

  return (
    <View>
      <ScreenHeader title='Liked Lectures' />
      <ScrollView>
        {LikedLectures?.map((item) => {
          return (
            <>
              <TouchableOpacity key={item._id} style={{ padding: 10 }} activeOpacity={0.6} onPress={() => navigation.navigate('Video', { "videoId": item._id })}>
                <View style={styles.card}>
                  <View style={styles.box} >
                    <Video
                      style={styles.video}
                      source={{ uri: item.videoUrl }}
                      paused={true}
                      controls={false}
                    />
                  </View>
                  <View style={styles.info}>
                    <Text style={styles.courseName}>{item.videotitle}</Text>
                    <Text style={styles.instructor}>{item.videoCourse?.courseTitle}</Text>
                    <Text style={styles.courseLength}>By {item.instructor?.name}</Text>
                  </View>
                </View>
              </TouchableOpacity></>
          )
        })}
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
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  box: {
    width: 180,
    // backgroundColor: 'red',
    borderRadius: 17,
    overflow: 'hidden',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  video: {
    width: 180,
    height: 100,
  },
  info: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  courseName: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: 'black',
    // backgroundColor: 'red',
    width: 160
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

export default LikedLectures;

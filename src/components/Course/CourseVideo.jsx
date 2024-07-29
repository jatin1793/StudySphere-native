import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScreenHeader from '../ScreenHeader';
import Video from 'react-native-video';
import { Get_video_student, Like_video } from '../../utils/axios';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videobox: {
    width: '100%',
    height: 250,
    borderRadius: 25,
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: 250,
  },
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
    fontSize: 18,
    fontFamily: "Poppins-Medium",
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
    margin: 10, // Added margin to place it correctly
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
  const { videoId } = route.params;
  const [isLiked, setisLiked] = useState(false)
  const [video, setvideo] = useState()
  const user = useSelector((state) => state.user.userdata)

  useEffect(() => {
    const getVideoDetails = async () => {
      const res = await Get_video_student({ videoid: videoId })
      setvideo(res)
    }
    getVideoDetails();

    if (video?.videoLikes?.includes(user?._id)) setisLiked(true)
    else setisLiked(false)
  }, [isLiked])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenHeader title="Lecture" />

      {!video ? (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size={50} color="#ff723f" />
      ):(
      <View>
        <View style={styles.videobox}>
          <Video
            source={{ uri: video?.videoUrl }} 
            style={styles.video}
            paused={false}
            repeat={true}
            controls={true}
            playInBackground={true}
          />
        </View>

        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View>
                <Text style={styles.courseName}>{video.videotitle}</Text>
                <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Regular' }}>{video.videoCourse?.courseTitle}</Text>
                <Text style={{ fontSize: 15, color: '#666', fontFamily: 'Poppins-Regular' }}>{video.videoCourse?.courseDomain}</Text>
              </View>

              <View style={{ height: 30, display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={async () => {
                  const res = await Like_video({ videoid: video._id })
                }}>
                  {isLiked ? (
                    <Icon name='heart' color='red' size={30} />
                  ) : (
                    <Icon name='heart-outline' color='black' size={25} />
                  )}
                </TouchableOpacity>
                <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', fontSize: 20 }}>{video?.videoLikes?.length}</Text>
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Poppins-Medium' }}>Description</Text>
              <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Regular' }}>{video.videodescription}</Text>
            </View>

            <View>
              <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Poppins-Medium' }}>{video?.videoCourse?.courseVideos?.length} Lectures</Text>
              <View style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
                {video?.videoCourse?.courseVideos?.map((item) => {
                  return (
                    <TouchableOpacity onPress={() => navigation.navigate('Video', { "courseId": item._id })}>
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
      </View>
      )}
    </SafeAreaView>
  )
}

export default CoursePage

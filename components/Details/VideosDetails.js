import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-native";
import {Video} from 'expo-av';
import { useSelector } from "react-redux";
import { strings } from '../../localization';

export default function VideosDetails({match}) {
	const {id} = useParams()
	const store = useSelector((state) => state);
	const [video, setVideo] = useState({
		"id": 3,
		"name": "Алгебра 7 класс в одной задаче | Математика",
		"author": "TutorOnline - уроки для школьников",
		"description": "Продолжаем тему. Теперь в одном примере - весь курс алгебры за 7 класс.",
		"source": "YouTube",
		"url": "https://www.youtube.com/watch?v=UYEaEko8gas",
		"path": "http://192.168.43.216:4000/videos/Алгебра%207%20класс%20в%20одной%20задаче%20_%20Математика.mp4",
		"upload_date_time": "2022-05-23T19:00:17.881953Z",
		"last_visited_date_time": "2022-05-25T01:34:26.257355Z",
		"publish_date": 2018,
		"views_counter": 18,
		"video_category": 3,
		"saved_by": []
	});
	useEffect(() => {
		
		strings.setLanguage(store.lang);
		fetch(`http://192.168.43.216:8000/videos/`+id, {
		  method: 'GET'
	
		}).then( resp => resp.json())
		.then(response => {
			console.log(response)
			setVideo(response)}
			)
		.catch (error => console.log(error))
	  }, []);
	return (
		<View>
			<View style={styles.container}>
          <View style={styles.wrapper}>
            {/* <Image source={image} style={styles.image} /> */}
            <Video
        // ref={video}
        source={{uri: video.path,}}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        /> 
            <Text style={styles.author}>{video.author}</Text>
            <Text style={styles.title}>{video.name}</Text>
          </View>
        </View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
	  paddingTop: 8,
	},
	bookList: {
	  paddingTop: 10,
	  flexDirection: "row",
	},
	video: {
	  alignSelf: 'center',
	  width: 286,
	  height: 220,
	},
	wrapper: {
	  flex: 1,
	  justifyContent: "space-between",
	  alignItems: "center",
	},
	author: {
	  flexWrap: "wrap",
	  fontSize: 13,
	  color: "background: rgba(0, 0, 0, 0.48);",
	  textAlign: "center",
	  width: 300,
	},
	image: {},
	title: {
	  flexWrap: "wrap",
	  width: 300,
	  fontSize: 13,
	  textAlign: "center",
	},
  });
  
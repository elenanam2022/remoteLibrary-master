import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState} from "react";
import CatalogTitle from "../../Elements/Headers/CatalogTitle";
import { strings } from "../../../localization";
import { useSelector } from "react-redux";
import Hr from "../../Elements/Basic/Hr";
import Book from "../CatalogItem/CatalogItem";
import Photo1 from "./../../../Images/test/videos/1.png";
import Photo2 from "./../../../Images/test/videos/2.png";
import { Link } from "react-router-native";

import {Video} from 'expo-av';
// import {VideoPlayer} from "react-native-video-player";

export default function Videos() {
  // const video = React.useRef(null);
  const store = useSelector((state) => state);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    strings.setLanguage(store.lang);
    fetch(`http://192.168.43.216:8000/videos-popular`, {
      method: 'GET'

    }).then( resp => resp.json())
    .then(response => setVideos(response))
    .catch (error => console.log(error))
  }, []);
  return (
    <View style={styles.container}>
      <CatalogTitle path="/videos" text={strings.Videos} />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <ScrollView
      horizontal={true}
       style={styles.bookList}>
        
        {videos.map((video) => (
          <Link to={"videos/"+video.id} style={styles.container}>
          <View style={styles.wrapper}>
            {/* <Image source={image} style={styles.image} /> */}
            <Video
        // ref={video}
        source={{uri: video.path,}}
        style={styles.video}
        // useNativeControls
        resizeMode="contain"
        /> 
            <Text style={styles.author}>{video.author}</Text>
            <Text style={styles.title}>{video.name}</Text>
          </View>
        </Link>
        ))}
      </ScrollView>
    </View>
  );
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
    width: 160,
    height: 100,
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
    width: 100,
  },
  image: {},
  title: {
    flexWrap: "wrap",
    width: 100,
    fontSize: 13,
    textAlign: "center",
  },
});

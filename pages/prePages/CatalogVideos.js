import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect,useState } from "react";
import CatalogTitle from "../../components/Elements/Headers/CatalogTitle";
import { strings } from "../../localization";
import { useSelector } from "react-redux";
import Hr from "../../components/Elements/Basic/Hr";
import Book from "../../components/Catalog/CatalogItem/CatalogItem";
import { Link } from "react-router-native";
import {Video} from 'expo-av';


export default function CatalogVideos() {
  const store = useSelector((state) => state);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    strings.setLanguage(store.lang);
    fetch(`http://192.168.43.216:8000/videos`, {
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
    paddingLeft: 28,
  },
  bookList: {
    paddingTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center"
  },
  video: {
    alignSelf: 'center',
    width: 240,
    height: 150,
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

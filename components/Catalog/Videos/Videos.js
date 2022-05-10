import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import CatalogTitle from "../../Elements/Headers/CatalogTitle";
import { strings } from "../../../localization";
import { useSelector } from "react-redux";
import Hr from "../../Elements/Basic/Hr";
import Book from "../CatalogItem/CatalogItem";
import Photo1 from "./../../../Images/test/videos/1.png";
import Photo2 from "./../../../Images/test/videos/2.png";
const videos = [
  {
    id: 1,
    title: "Алгебра 7 класс в одной задаче | Математика",
    image: Photo1,
  },
  {
    id: 2,
    title: "Спряжение глаголов | Русский язык |TutorOnline",
    image: Photo2,
  },
];
export default function Videos() {
  const store = useSelector((state) => state);
  useEffect(() => {
    strings.setLanguage(store.lang);
  }, []);
  return (
    <View style={styles.container}>
      <CatalogTitle path="/videos" text={strings.Videos} />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <View style={styles.bookList}>
        {videos.map((video) => (
          <Book
            path={`/videos/${video.id}`}
            key={video.id}
            author={video.author}
            title={video.title}
            image={video.image}
          />
        ))}
      </View>
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
    justifyContent: "space-between",
    alignItems: "stretch",
  },
});

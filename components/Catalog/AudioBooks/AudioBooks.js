import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import CatalogTitle from "../../Elements/Headers/CatalogTitle";
import { strings } from "../../../localization";
import { useSelector } from "react-redux";
import Hr from "../../Elements/Basic/Hr";
import Photo1 from "./../../../Images/test/audioBooks/1.png";
import Photo2 from "./../../../Images/test/audioBooks/2.png";
import Photo3 from "./../../../Images/test/audioBooks/3.png";
import CatalogItem from "../CatalogItem/CatalogItem";
const audiobooks = [
  {
    id: 1,
    title: "Подсознание может всё!",
    author: "Джон Кехо",
    image: Photo1,
  },
  {
    id: 2,
    title: "После тяжелой продолжительной...",
    author: "Борис Акунин",
    image: Photo2,
  },
  {
    id: 3,
    title: "Онлайн-влияние. Как управлять..",
    author: "Бас Вютерс",
    image: Photo3,
  },
];
export default function AudioBooks() {
  const store = useSelector((state) => state);
  useEffect(() => {
    strings.setLanguage(store.lang);
  }, []);
  return (
    <View style={styles.container}>
      <CatalogTitle path="/audioBooks" text={strings.Audio_Books} />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <View style={styles.bookList}>
        {audiobooks.map((book) => (
          <CatalogItem
            path={`/audioBooks/${book.id}`}
            key={book.id}
            author={book.author}
            title={book.title}
            image={book.image}
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

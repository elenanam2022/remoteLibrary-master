import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import CatalogTitle from "../../Elements/Headers/CatalogTitle";
import { strings } from "../../../localization";
import { useSelector } from "react-redux";
import Hr from "../../Elements/Basic/Hr";
import Book from "../CatalogItem/CatalogItem";
import Photo1 from "./../../../Images/test/books/1.png";
import Photo2 from "./../../../Images/test/books/2.png";
import Photo3 from "./../../../Images/test/books/3.png";
const books = [
  {
    id: 1,
    title: "Тревожные люди",
    author: "Фредрик Бакман",
    image: Photo1,
  },
  {
    id: 2,
    title: "Лекарство от меланхолии. Сборник",
    author: "Рэй Брэдбери",
    image: Photo2,
  },
  {
    id: 3,
    title: "На краю",
    author: "Николай Свечин",
    image: Photo3,
  },
];
export default function Books() {
  const store = useSelector((state) => state);
  useEffect(() => {
    strings.setLanguage(store.lang);
  }, []);
  return (
    <View style={styles.container}>
      <CatalogTitle path="/books" text={strings.Book_Bestsellers} />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <View style={styles.bookList}>
        {books.map((book) => (
          <Book
            path={`/books/${book.id}`}
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

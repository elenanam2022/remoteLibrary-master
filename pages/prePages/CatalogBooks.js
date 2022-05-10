import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import CatalogTitle from "./../../components/Elements/Headers/CatalogTitle";
import { strings } from "./../../localization";
import { useSelector } from "react-redux";
import Hr from "./../../components/Elements/Basic/Hr";
import Book from "./../../components/Catalog/CatalogItem/CatalogItem";
import Photo1 from "./../../Images/test/books/1.png";
import Photo2 from "./../../Images/test/books/2.png";
import Photo3 from "./../../Images/test/books/3.png";
import Photo4 from "./../../Images/test/books/4.png";
import Photo5 from "./../../Images/test/books/5.png";
import Photo6 from "./../../Images/test/books/6.png";
import Photo7 from "./../../Images/test/books/7.png";
import Photo8 from "./../../Images/test/books/8.png";
import Photo9 from "./../../Images/test/books/9.png";

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
  {
    id: 4,
    title: "Тревожные люди",
    author: "Фредрик Бакман",
    image: Photo4,
  },
  {
    id: 5,
    title: "Лекарство от меланхолии. Сборник",
    author: "Рэй Брэдбери",
    image: Photo5,
  },
  {
    id: 6,
    title: "На краю",
    author: "Николай Свечин",
    image: Photo6,
  },
  {
    id: 7,
    title: "Тревожные люди",
    author: "Фредрик Бакман",
    image: Photo7,
  },
  {
    id: 8,
    title: "Лекарство от меланхолии. Сборник",
    author: "Рэй Брэдбери",
    image: Photo8,
  },
  {
    id: 9,
    title: "На краю",
    author: "Николай Свечин",
    image: Photo9,
  },
];
export default function CatalogBooks() {
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
        {books
          .reduce(
            (acc, book, index) => [
              ...acc,
              book,
              ...((index - 2) % 3 == 0 && index !== books.length - 1
                ? [{ isLine: true }]
                : []),
            ],
            []
          )
          .map((book, index) =>
            book.isLine ? (
              <View
                key={index * 100}
                style={{ width: "100%", paddingBottom: 20 }}
              >
                <Hr style={{ marginVertical: 2, marginTop: 8 }} />
                <Hr />
              </View>
            ) : (
              <Book
                path={`/books/${book.id}`}
                key={book.id}
                author={book.author}
                title={book.title}
                image={book.image}
              />
            )
          )}
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
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
});

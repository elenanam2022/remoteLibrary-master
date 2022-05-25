import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState} from "react";
import CatalogTitle from "../../Elements/Headers/CatalogTitle";
import { strings } from "../../../localization";
import { useSelector } from "react-redux";
import Hr from "../../Elements/Basic/Hr";
import Book from "../CatalogItem/CatalogItem";
import image from "./../../../Images/Icons/default_book_cover.png";

export default function Books() {
  const store = useSelector((state) => state);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.43.216:8000/books-popular`, {
      method: 'GET'

    }).then( resp => resp.json())
    .then(response => {
      let filtered_books = []
      for (let i = 0; i<response.length; i++ ){
        if (response[i].path.slice(-4 ) === "epub"){
          console.log(response[i].path.slice(-4 ))
            filtered_books.push(response[i])
        }
      }
        
        setBooks(filtered_books)
    })
    .catch (error => console.log(error))
    strings.setLanguage(store.lang);
  
  }, []);
  return (
    <View style={styles.container}>
      <CatalogTitle path="/books" text={strings.Book_Bestsellers} />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <ScrollView
      horizontal
      style={styles.bookList}>
        {books.map((book) => (
          <Book
            path={`/books/${book.id}`}
            key={book.id}
            author={book.author}
            title={book.name}
            image={image}
          />
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
    flexDirection: "row"
  },
});

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "react-router-native";

export default function CatalogItem({ author, title, image, path = "/" }) {
  return (
    <Link to={path} style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Link>
  );
}
const styles = StyleSheet.create({
  container: {},
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

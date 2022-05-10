import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "react-router-native";

export default function CatalogTitle({ text, path }) {
  return (
    <Link replace={true} to={path}>
      <Text style={styles.title}>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#23718A",
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Hr({ style }) {
  return <View style={[styles.hr, style]} />;
}
const styles = StyleSheet.create({
  hr: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
  },
});

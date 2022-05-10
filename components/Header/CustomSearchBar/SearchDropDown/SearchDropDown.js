import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Hr from "./../../../Elements/Basic/Hr";
export default function SearchDropDown({ setInputText, data }) {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setInputText(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
          <Hr />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: "absolute",
    width: "100%",
    zIndex: 10,
    top: "100%",
    backgroundColor: "white",
  },
  item: {
    paddingHorizontal: "10%",
    paddingVertical: 10,
  },
});

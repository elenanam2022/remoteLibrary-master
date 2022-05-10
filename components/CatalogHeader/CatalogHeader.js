import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import HomeIcon from "./../../Images/Icons/home.png";
import { useSelector } from "react-redux";
import { strings } from "../../localization";
import { Button } from "@rneui/base";
export default function CatalogHeader() {
  const store = useSelector((state) => state);
  useEffect(() => {
    strings.setLanguage(store.lang);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image style={styles.icon} source={HomeIcon} />
        <Text style={styles.h1}>{strings.Catalog}</Text>
      </View>
      <View style={styles.rightSide}>
        <Button
          title={strings.Rating}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          containerStyle={styles.buttonContainer}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          title={strings.Year}
          containerStyle={styles.buttonContainer}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          title={strings.Genre}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  leftSide: {
    flexDirection: "row",
  },
  rightSide: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  h1: {
    fontSize: 20,
    paddingLeft: 3,
  },
  icon: {
    paddingTop: 2,
    width: 36,
    height: 36,
  },
  buttonContainer: { margin: 0, padding: 0, borderRadius: 0 },
  button: {
    borderRadius: 0,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: "background: rgba(193, 201, 231, 0.5);",
  },
  buttonText: { color: "black", fontSize: 11 },
});

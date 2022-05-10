import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { strings } from "../../../localization";
import { Button } from "@rneui/base";
import { Link } from "react-router-native";
export default function GeneralInformation({ data, readTo, audio }) {
  const store = useSelector((state) => state);
  useEffect(() => {
    strings.setLanguage(store.lang);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topGrid}>
        <View style={styles.leftGrid}>
          <Image style={styles.image} source={data.image} />
        </View>
        <View style={styles.rightGrid}>
          <View style={{ paddingLeft: 6 }}>
            <Text style={styles.citationText}>
              {strings.nameText}: {data.title}
            </Text>
            <Text style={styles.citationText}>
              {strings.authorText}: {data.author}
            </Text>
            <Text style={styles.citationText}>
              {strings.sourceText}: {data.source}
            </Text>
            <Text style={styles.citationText}>
              {strings.translateDate}: {data.translateDate}
            </Text>
            <Text style={styles.citationText}>
              {strings.publishYearText}: {data.publishDate}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Link style={styles.button} to={readTo}>
              <Text style={styles.ButtonText}>{strings.readText}</Text>
            </Link>
            <Link style={styles.button}>
              <Text style={styles.ButtonText}>{strings.downloadText}</Text>
            </Link>
            <Button
              titleStyle={styles.ButtonText}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              title={strings.saveText}
            />
          </View>
          {audio && (
            <View style={[styles.buttonWrapper, { paddingTop: 0 }]}>
              <Button
                titleStyle={styles.ButtonText}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
                title={strings.Listen}
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.downGrid}>
        <Text style={styles.descriptionTitle}>{strings.descriptionText}</Text>
        <Text style={styles.text}>{data.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  topGrid: { flexDirection: "row", alignItems: "center" },
  rightGrid: { flex: 1 },
  leftGrid: { flex: 1, paddingHorizontal: 10 },
  image: {
    maxWidth: 300,
  },
  citationText: {
    fontSize: 12,
    marginBottom: 5,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 0,
    margin: 0,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgba(193, 201, 231, 0.5);",
  },
  buttonContainer: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgba(193, 201, 231, 0.5);",
  },
  ButtonText: { color: "black", fontSize: 12 },
  downGrid: {
    alignItems: "center",
    width: "100%",
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  descriptionTitle: { fontSize: 20, paddingBottom: 20 },
  text: { fontSize: 15 },
});

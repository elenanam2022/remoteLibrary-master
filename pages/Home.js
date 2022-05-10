import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AudioBooks from "../components/Catalog/AudioBooks/AudioBooks";
import Books from "../components/Catalog/Books/Books";
import Videos from "../components/Catalog/Videos/Videos";
import Hr from "../components/Elements/Basic/Hr";
import { strings } from "../localization";
export default function Home() {
  const store = useSelector((state) => state);
  useEffect(() => {
    strings.setLanguage(store.lang);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{strings.popularText}</Text>
      <Books />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <AudioBooks />
      <Hr style={{ marginVertical: 2, marginTop: 8 }} />
      <Hr />
      <Videos />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: "100%",
  },
  header: {
    fontSize: 20,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "react-router-native";
import Hr from "../../Elements/Basic/Hr";

export default function HeaderMenu({ strings, closeMenu }) {
  return (
    <View style={styles.menuItems}>
      <Link
        to="/books"
        onPress={closeMenu}
        replace={true}
        style={styles.menuItem}
      >
        <Text style={styles.menuItemLink}>{strings.booksText}</Text>
      </Link>
      <Hr />
      <Link
        to="/videos"
        onPress={closeMenu}
        replace={true}
        style={styles.menuItem}
      >
        <Text style={styles.menuItemLink}>{strings.videoText}</Text>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemLink: {
    color: "black",
    fontSize: 15,
  },
});

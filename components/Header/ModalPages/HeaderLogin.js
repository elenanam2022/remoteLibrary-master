import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";

export default function HeaderLogin({ strings, closeMenu }) {
  const [formState, setFormState] = useState("not_opened");
  const [inputText, setInputText] = useState("");
  const submitEmail = () => {
    closeMenu();
    setInputText("");
  };
  const submitPhone = () => {
    closeMenu();
    setInputText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {formState === "not_opened"
          ? strings.Login_and_Registration
          : formState === "email"
          ? strings.enter_email_address
          : strings.enter_phone_number}
      </Text>
      <View style={styles.wrapper}>
        {formState === "not_opened" ? (
          <View>
            <View style={styles.item}>
              <Button
                titleStyle={styles.buttonText}
                buttonStyle={styles.button}
                title={strings.email}
                onPress={() => setFormState("email")}
              />
            </View>
            <View style={styles.item}>
              <Button
                titleStyle={styles.buttonText}
                buttonStyle={styles.button}
                title={strings.phone_number}
                onPress={() => setFormState("phone")}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.item}>
              <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
              />
            </View>
            <View style={styles.item}>
              <Button
                titleStyle={styles.buttonText}
                buttonStyle={styles.button}
                onPress={formState === "email" ? submitEmail : submitPhone}
                title={strings.continue}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 37,
    paddingHorizontal: 25,
    paddingBottom: 10,
  },
  wrapper: {
    marginTop: 18,
  },
  title: {
    fontSize: 15,
  },
  item: {
    paddingBottom: 28,
  },
  button: {
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "rgba(99, 145, 155, 0.15)",
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
  },
  input: {
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "rgba(99, 145, 155, 0.15)",
    color: "#000",
    fontSize: 14,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

import { View, Text, StyleSheet, TextInput } from "react-native";
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SearchBar } from "@rneui/themed";
import SearchDropDown from "./SearchDropDown/SearchDropDown";
import { useKeyboard } from "./UseKeyboard/UseKeyboard";

export default function CustomSearchBar({ strings }) {
  const [searchText, setSearchText] = useState("");
  const [focusState, setFocusState] = useState(false);
  const inputRef = useRef(null);
  const keyboardState = useKeyboard({
    onHide: () => {
      inputRef.current.blur();
      setFocusState(false);
    },
  });
  const [dataSource] = useState([
    "apple",
    "banana",
    "cow",
    "dex",
    "zee",
    "orange",
    "air",
    "bottle",
  ]);
  return (
    <View style={styles.searchInputWrapper}>
      <SearchBar
        ref={inputRef}
        placeholder={strings.searchPlaceholder}
        round
        lightTheme
        inputStyle={styles.searchInputText}
        containerStyle={styles.searchInput}
        inputContainerStyle={styles.searchInputContainer}
        value={searchText}
        onFocus={() => setFocusState(true)}
        autoFocus={false}
        onChangeText={(text) => setSearchText(text)}
      />
      {focusState && keyboardState && dataSource.length && (
        <SearchDropDown data={dataSource} setInputText={setSearchText} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputWrapper: {
    marginTop: 8,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 0,
    padding: 0,
  },
  searchInputText: {
    fontSize: 13,
  },
  searchInputContainer: { padding: 0, backgroundColor: "white" },
});

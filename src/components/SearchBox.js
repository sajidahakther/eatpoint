import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = ({ text, onTextChanged, onTextSubmitted }) => {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="ios-search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="grey"
        value={text}
        onChangeText={onTextChanged}
        onEndEditing={onTextSubmitted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    margin: 15,
    backgroundColor: "#e6e6e6",
    height: 40,
    borderRadius: 50,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 24,
    color: "grey",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
});

export default SearchBox;

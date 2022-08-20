import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ text, onTextChanged, onTextSubmitted }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor='lightgrey'
        value={text}
        onChangeText={onTextChanged}
        onEndEditing={onTextSubmitted}
      />
      <Ionicons name="ios-search" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    boxShadow: '0px 3px 10px rgba(0,0,0,0.5)',
    backgroundColor: '#FFF',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    fontSize: 24,
    color: '#FFB800',
    alignSelf: "center",
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 22,
    fontWeight: '600',
  },
});

export default SearchBar;

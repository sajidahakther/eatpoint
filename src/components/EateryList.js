import React from "react";
import { withNavigation } from "react-navigation";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import EateryInfo from "./EateryInfo";

const EateryList = ({ eateries, heading, navigation }) => {
  if (!eateries.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <FlatList
        style={styles.eateryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={eateries}
        keyExtractor={(eatery) => eatery.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewEatery", { id: item.id })}
            >
              <EateryInfo eatery={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  eateryList: {
    marginBottom: 20,
  },
});

export default withNavigation(EateryList);

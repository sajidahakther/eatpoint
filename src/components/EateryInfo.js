import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Foundation } from "@expo/vector-icons";

const EateryInfo = ({ eatery }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: eatery.image_url }} />
      <View style={styles.eateryInfo}>
        <Text style={styles.name}>{eatery.name}</Text>
        <Text style={styles.rating}>
          {eatery.rating} <Foundation name="star" style={styles.star} />
        </Text>
      </View>
      <Text>
        {eatery.location.address1}
        {"\n"}
        {eatery.location.zip_code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 10,
    marginBottom: 5,
  },
  eateryInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    width: 200,
    marginBottom: 2,
  },
  rating: {
    fontSize: 15,
    color: "goldenrod",
  },
  star: {
    fontSize: 16,
    color: "goldenrod",
  },
});

export default EateryInfo;

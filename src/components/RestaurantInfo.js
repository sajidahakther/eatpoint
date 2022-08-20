import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Rating from "./Rating";

const RestaurantInfo = ({ key, restaurant }) => {
  const placeholderImage = require("../assets/placeholder-image.png");
  return (
    <View key={key} style={styles.container}>
      <View style={styles.card}>
        {restaurant.image_url ? (
          <Image style={styles.image} source={{ uri: restaurant.image_url }} />
        ) : (
          <Image style={styles.image} source={placeholderImage} />
        )}
        <View style={styles.restaurantInfo}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Rating restaurant={restaurant}/>
        </View>
        <Text style={styles.description}>
          {restaurant.location.address1}
          {"\n"}
          {restaurant.location.zip_code}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  card: {
    width: 250,
    borderRadius: 5,
    paddingBottom: "10px",
    boxShadow: "0px 3px 15px rgba(0,0,0,1)",
    backgroundColor: "#FFF",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingBottom: 10,
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  restaurantInfo: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
    width: 150,
  },
  description: {
    padding: 10,
  },
});

export default RestaurantInfo;

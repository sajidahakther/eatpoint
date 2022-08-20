import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import yelp from "../api/yelp";

const ViewOptionScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");
  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <View style={styles.heading}>
        <Text style={styles.headingText}>{restaurant.name}</Text>
        <Text style={styles.headingText}>{restaurant.price}</Text>
      </View>
      <View style={styles.horizontalRule} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Location: {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.zip_code}
        </Text>
        {restaurant.phone ? (
          <Text style={styles.descriptionText}>
            Book a table: {restaurant.phone}
          </Text>
        ) : null}
        <Text style={styles.descriptionText}>
          Rated {restaurant.rating} stars ({restaurant.review_count} reviews)
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginVertical: 10,
    marginHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: "100%",
  },
  horizontalRule: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  icon: {
    fontSize: 16,
  },
  description: {
    marginHorizontal: 15,
  },
  descriptionText: {
    lineHeight: '22px'
  }
});

export default ViewOptionScreen;

import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import yelp from "../api/yelp";

const ViewEateryScreen = ({ navigation }) => {
  const [eatery, setEatery] = useState(null);
  const id = navigation.getParam("id");
  const getEatery = async (id) => {
    const response = await yelp.get(`/${id}`);
    setEatery(response.data);
  };

  useEffect(() => {
    getEatery(id);
  }, []);

  if (!eatery) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{eatery.name}</Text>
      <FlatList
        data={eatery.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />

      <View style={styles.stats}>
        <Text style={styles.statsText}>Price Point: {eatery.price}</Text>
        <Text style={styles.statsText}>
          {eatery.rating} Stars ({eatery.review_count} Reviews)
        </Text>
      </View>

      <Text style={styles.address}>
        <Entypo name="location-pin" style={styles.icon} /> Location:{" "}
        {eatery.location.address1}, {eatery.location.city},{" "}
        {eatery.location.zip_code}
      </Text>
      {eatery.phone ? (
        <Text>
          <Entypo name="phone" style={styles.icon} /> To book a table, contact:{" "}
          {eatery.phone}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 15,
    borderRadius: 10,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statsText: {
    height: 90,
  },
  icon: {
    fontSize: 16,
  },
});

export default ViewEateryScreen;

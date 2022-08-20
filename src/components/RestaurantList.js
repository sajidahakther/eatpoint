import React from "react";
import { withNavigation } from "react-navigation";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantList = ({ width, restaurants, heading, navigation }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View>
      <Text style={{...styles.heading, width}}>{heading}</Text>
      <FlatList
        style={styles.restaurantList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item, i }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewRestaurant", { id: item.id })}
            >
              <RestaurantInfo key={i} restaurant={item} />
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
    backgroundColor: '#FFB800',
    marginLeft: 0,
    paddingLeft: 15,
  },
  restaurantList: {
    marginBottom: 20,
  },
});

export default withNavigation(RestaurantList);

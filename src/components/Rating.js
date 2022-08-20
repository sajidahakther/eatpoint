import React from "react";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Rating = ({ restaurant }) => {
  const firstMethod = (rating) => {
    return [...Array(5)].map((el, i) =>
      i < rating ? (
        <Ionicons key={i} name="star" style={styles.star} />
      ) : (
        <Ionicons key={i} name="star-outline" style={styles.star} />
      )
    );
  };
  const secondMethod = (rating) => {
    return [...Array(5)].map((el, i) =>
      i < rating && i + 1 > rating ? (
        <Ionicons key={i} name="star-half" style={styles.star} />
      ) : i < rating ? (
        <Ionicons key={i} name="star" style={styles.star} />
      ) : (
        <Ionicons key={i} name="star-outline" style={styles.star} />
      )
    );
  };
  return (
    <Text>
      {Number.isInteger(restaurant.rating)
        ? firstMethod(restaurant.rating)
        : secondMethod(restaurant.rating)}
    </Text>
  );
};

const styles = StyleSheet.create({
  star: {
    fontSize: 16,
    color: "#FFB800",
    lineHeight: 22,
  },
});

export default Rating;

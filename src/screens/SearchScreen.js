import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurantData from "../hooks/useRestaurantData";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurantData();

  const filterRestaurantByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={text}
        onTextChanged={setText}
        onTextSubmitted={() => searchApi(text)}
      />
      <ScrollView>
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <RestaurantList
          restaurants={filterRestaurantByPrice("£")}
          heading="£"
          width={40}
        />
        <RestaurantList
          restaurants={filterRestaurantByPrice("££")}
          heading="££"
          width={52}
        />
        <RestaurantList
          restaurants={filterRestaurantByPrice("£££")}
          heading="£££"
          width={65}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

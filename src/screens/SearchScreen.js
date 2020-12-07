import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import SearchBox from "../components/SearchBox";
import useEateryData from "../hooks/useEateryData";
import EateryList from "../components/EateryList";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [searchApi, eateries, errorMessage] = useEateryData();

  const filterEateryByPrice = (price) => {
    return eateries.filter((eatery) => {
      return eatery.price === price;
    });
  };
  return (
    <>
      <SearchBox
        term={text}
        onTextChanged={setText}
        onTextSubmitted={() => searchApi(text)}
      />
      <ScrollView>
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <EateryList
          eateries={filterEateryByPrice("£")}
          heading="Cheap and Cheerful"
        />
        <EateryList
          eateries={filterEateryByPrice("££")}
          heading="Slightly Pricey"
        />
        <EateryList
          eateries={filterEateryByPrice("£££")}
          heading="Expensive Eats"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

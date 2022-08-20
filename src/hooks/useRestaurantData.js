import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchedText) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 40,
          term: searchedText,
          location: "london",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      setErrorMessage("Ooops! An error occured.");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, restaurants, errorMessage];
};

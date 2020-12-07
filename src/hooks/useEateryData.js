import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [eateries, setEateries] = useState([]);
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
      setEateries(response.data.businesses);
    } catch (e) {
      setErrorMessage("Ooops! An error occured.");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, eateries, errorMessage];
};

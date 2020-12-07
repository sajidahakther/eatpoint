import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer G1QO8s9KgjoYrbJBaYWLk-oNiGfOayGj9f5ndZ4UvWyFNd5SjWeidWVKAgwaul7r2NNi_T5MLSnV87juIGvbNlTWkHI9GZ7jfCQPlvCh6yT8LfxQQHJ28z7paNHIX3Yx",
  },
});

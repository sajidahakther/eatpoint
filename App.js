import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ViewEateryScreen from "./src/screens/ViewEateryScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ViewEatery: ViewEateryScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Eat Point",
    },
  }
);

export default createAppContainer(navigator);

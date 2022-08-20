import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ViewOptionScreen from "./src/screens/ViewOptionScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ViewRestaurant: ViewOptionScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "foodcourt",
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: '30px',
        fontWeight: '800',
      },
      headerStyle: {
        backgroundColor: '#FFB800',
      },
    },
  }
);

export default createAppContainer(navigator);

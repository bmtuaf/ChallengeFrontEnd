import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./pages/home/home.js";
import CarsScreen from "./pages/cars/cars.js";
import CarDetailsScreen from "./pages/carDetails/carDetails.js";
import StartScreen from "./pages/start/start.js";
import LoginScreen from "./pages/login/login.js";
import BottomNavigation from "./components/bottomNavigation/bottomNavigation.js";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cars" component={CarsScreen} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
      </Stack.Navigator>
      {/* <BottomNavigation /> */}
    </NavigationContainer>
  );
}

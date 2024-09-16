import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import AddTreatmentScreen from "../src/screens/AddTreatmentScreen";
import AllTreatmentsScreen from "../src/screens/AllTreatmentsScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTreatment" component={AddTreatmentScreen} />
        <Stack.Screen name="AllTreatments" component={AllTreatmentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

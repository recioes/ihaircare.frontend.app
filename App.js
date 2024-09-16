import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AddTreatmentScreen from "./screens/AddTreatmentScreen";
import AllTreatmentsScreen from "./screens/AllTreatmentsScreen";
import TreatmentDetailsScreen from "./screens/TreatmentDetailsScreen";
import { styles } from "./styles/globalStyles"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Rotina Capilar" }}
        />
        <Stack.Screen
          name="AddTreatment"
          component={AddTreatmentScreen}
          options={{ title: "Adicionar Tratamento" }}
        />
        <Stack.Screen
          name="AllTreatments"
          component={AllTreatmentsScreen}
          options={{ title: "Todos os Tratamentos" }}
        />
        <Stack.Screen
          name="TreatmentDetails"
          component={TreatmentDetailsScreen}
          options={{ title: "Detalhes do Tratamento" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

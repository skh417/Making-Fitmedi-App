import "react-native-gesture-handler"; // <--- 무조건 제일 위에 놓아야 한다.
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import LoadingPage from "./src/components/LoadingPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='LoadingPage' component={LoadingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

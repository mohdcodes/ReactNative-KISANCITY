import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./app/login"; 
// import dummyScreen from "./app/DummyScreen"

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const prepareApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      await SplashScreen.hideAsync();
    };

    prepareApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="DummyScreen" component={dummyScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

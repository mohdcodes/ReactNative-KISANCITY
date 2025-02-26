import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./app/login";
import OtpScreen from "./app/otpScreen";
import DummyScreen from "./app/dummyScreen";

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
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="DummyScreen" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

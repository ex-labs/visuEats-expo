import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  RegisterScreen,
  HomeScreen,
  MenuScreen,
  MenuItemScreen,
  ProductDetailScreen,
  ForgetScreen,
  IntroScreen,
} from "../../screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro"
          component={IntroScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Menu"
          component={MenuScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MenuItem"
          component={MenuItemScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProductDetail"
          component={ProductDetailScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Forget"
          component={ForgetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

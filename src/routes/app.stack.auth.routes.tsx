import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Auth } from "@screens/Auth";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Auth} />
    </Navigator>
  );
}

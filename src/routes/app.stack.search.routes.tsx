import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Serie } from "@screens/Serie";
import { Episode } from "@screens/Episode";
import { Search } from "@screens/Search";

const { Navigator, Screen } = createStackNavigator();

export function AppStackSearchRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Search} />
      <Screen name="Serie" component={Serie} />
      <Screen name="Episode" component={Episode} />
    </Navigator>
  );
}

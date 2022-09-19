import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SeriesList } from "@screens/SeriesList";
import { Serie } from "@screens/Serie";
import { Episode } from "@screens/Episode";

const { Navigator, Screen } = createStackNavigator();

export function AppStackListRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={SeriesList} />
      <Screen name="Serie" component={Serie} />
      <Screen name="Episode" component={Episode} />
    </Navigator>
  );
}

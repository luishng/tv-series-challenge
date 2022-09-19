import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Serie } from "@screens/Serie";
import { Episode } from "@screens/Episode";
import { Favorites } from "@screens/Favorites";

const { Navigator, Screen } = createStackNavigator();

export function AppStackFavoritesRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Favorites} />
      <Screen name="Serie" component={Serie} />
      <Screen name="Episode" component={Episode} />
    </Navigator>
  );
}

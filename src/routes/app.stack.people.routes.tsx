import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { PeopleSearch } from "@screens/PeopleSearch";
import { People } from "@screens/People";
import { Serie } from "@screens/Serie";
import { Episode } from "@screens/Episode";

const { Navigator, Screen } = createStackNavigator();

export function AppStackPeopleRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={PeopleSearch} />
      <Screen name="People" component={People} />
      <Screen name="Serie" component={Serie} />
      <Screen name="Episode" component={Episode} />
    </Navigator>
  );
}

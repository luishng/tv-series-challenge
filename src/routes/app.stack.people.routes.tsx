import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { PeopleSearch } from "@screens/PeopleSearch";

const { Navigator, Screen } = createStackNavigator();

export function AppStackPeopleRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={PeopleSearch} />
    </Navigator>
  );
}

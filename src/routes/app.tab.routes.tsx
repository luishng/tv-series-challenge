import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

import { Platform } from "react-native";

import { AppStackListRoutes } from "./app.stack.list.routes";
import { AppStackSearchRoutes } from "./app.stack.search.routes";
import { AppStackPeopleRoutes } from "./app.stack.people.routes";
import { AppStackFavoritesRoutes } from "./app.stack.favorite.routes";

export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof FontAwesome>["name"] =
            "home";

          if (route.name === "Series List") {
            iconName = "list";
          } else if (route.name === "Series Search") {
            iconName = "search";
          } else if (route.name === "Your Favorites") {
            iconName = focused ? "heart" : "heart-o";
          } else if (route.name === "People Search") {
            return (
              <MaterialIcons name="person-search" size={24} color={color} />
            );
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: {
          height: 50,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Screen name="Series List" component={AppStackListRoutes} />
      <Screen name="Series Search" component={AppStackSearchRoutes} />
      <Screen name="People Search" component={AppStackPeopleRoutes} />
      <Screen name="Your Favorites" component={AppStackFavoritesRoutes} />
    </Navigator>
  );
}

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppTabRoutes } from "./app.tab.routes";

export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1f" }}>
      <NavigationContainer>
        <AppTabRoutes />
      </NavigationContainer>
    </View>
  );
}

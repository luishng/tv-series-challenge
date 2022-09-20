import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./app.stack.auth.routes";

import { useUser } from "@hooks/user";

export function Routes() {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1f" }}>
      <NavigationContainer>
        {true ? <AppTabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}

import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { useUser } from "@hooks/user";
import { Ionicons } from "@expo/vector-icons";

import * as LocalAuthentication from "expo-local-authentication";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "@components/Button";

export function Auth() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  const { changeUser } = useUser();

  useEffect(() => {
    async function isCompatible() {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    }

    isCompatible();
  }, []);

  async function handleBiometric() {
    const biometricAuth = await LocalAuthentication.authenticateAsync();

    if (biometricAuth) {
      changeUser(true);
    }
  }

  async function handleLogin() {
    changeUser(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Welcome !</Text>
      {isBiometricSupported ? (
        <TouchableOpacity style={styles.finger} onPress={handleBiometric}>
          <Ionicons name="finger-print" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <Button title="Login" color="green" onPress={handleLogin} />
      )}
    </View>
  );
}

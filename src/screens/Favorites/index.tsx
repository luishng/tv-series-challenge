import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useFavorites } from "@hooks/favorites";
import { styles } from "./styles";

export function Favorites() {
  const { favorites } = useFavorites();

  const navigation = useNavigation();

  function handleSerieDetail(id: number) {
    navigation.navigate("Serie", { id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textScreenTitle}>Your Favorites</Text>
      {!favorites.length && (
        <Text style={styles.text}>You don't have any serie in favorites</Text>
      )}

      {favorites &&
        favorites
          .sort((serieA, serieB) => (serieA.name > serieB.name ? 1 : -1))
          .map((serie) => (
            <TouchableOpacity
              style={styles.containerSeries}
              key={serie.id}
              onPress={() => handleSerieDetail(serie.id)}
            >
              {serie.image?.medium ? (
                <Image
                  style={styles.image}
                  source={{ uri: serie.image?.medium }}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={require("@assets/noImage.png")}
                />
              )}
              <Text style={styles.text}>{serie.name}</Text>
            </TouchableOpacity>
          ))}
    </View>
  );
}

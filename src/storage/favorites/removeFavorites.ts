import { SerieDTO } from "@dtos/SerieDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_COLLECTION } from "@storage/storageConfig";
import { getAllFavorites } from "./getAllFavorites";

export async function removeFavorites(serie: SerieDTO) {
  try {
    const storageFavorites = await getAllFavorites();

    let newFavorites = storageFavorites.filter(
      (favorites) => favorites.id !== serie.id
    );

    await AsyncStorage.setItem(
      FAVORITE_COLLECTION,
      JSON.stringify(newFavorites)
    );

    return newFavorites;
  } catch (error) {
    throw error;
  }
}

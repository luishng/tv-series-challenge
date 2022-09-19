import { SerieDTO } from "@dtos/SerieDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_COLLECTION } from "@storage/storageConfig";
import { getAllFavorites } from "./getAllFavorites";

export async function addFavorites(serie: SerieDTO) {
  try {
    const storageFavorites = await getAllFavorites();

    await AsyncStorage.setItem(
      FAVORITE_COLLECTION,
      JSON.stringify([...storageFavorites, serie])
    );
  } catch (error) {
    throw error;
  }
}

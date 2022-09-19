import { SerieDTO } from "@dtos/SerieDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_COLLECTION } from "@storage/storageConfig";

export async function getAllFavorites() {
  try {
    const storage = await AsyncStorage.getItem(FAVORITE_COLLECTION);

    const favorites: SerieDTO[] = storage ? JSON.parse(storage) : [];

    return favorites;
  } catch (error) {
    throw error;
  }
}

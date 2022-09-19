import { SerieDTO } from "@dtos/SerieDTO";
import { addFavorites } from "@storage/favorites/addFavorites";
import { getAllFavorites } from "@storage/favorites/getAllFavorites";
import { removeFavorites } from "@storage/favorites/removeFavorites";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface FavoritesContextData {
  favorites: SerieDTO[];
  addFavoriteData: (serie: SerieDTO) => void;
  removeFavoriteData: (serie: SerieDTO) => void;
  loading: boolean;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [data, setData] = useState<SerieDTO[]>({} as SerieDTO[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFavoriteData() {
      const favorites = await getAllFavorites();

      setData(favorites);
      setLoading(false);
    }

    loadFavoriteData();
  }, []);

  async function addFavoriteData(serie: SerieDTO) {
    try {
      await addFavorites(serie);
      setData([...data, serie]);
    } catch (error) {
      console.log("Add favorite error");
    }
  }
  async function removeFavoriteData(serie: SerieDTO) {
    try {
      let newFavoritesList = await removeFavorites(serie);

      setData(newFavoritesList);
    } catch (error) {
      console.log("Add favorite error");
    }
  }
  return (
    <FavoritesContext.Provider
      value={{
        favorites: data,
        addFavoriteData,
        removeFavoriteData,
        loading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  return context;
}

export { FavoritesProvider, useFavorites };

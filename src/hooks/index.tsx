import React, { ReactNode } from "react";
import { FavoritesProvider } from "./favorites";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}

export { AppProvider };

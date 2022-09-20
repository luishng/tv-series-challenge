import React, { ReactNode } from "react";

import { UserProvider } from "./user";
import { FavoritesProvider } from "./favorites";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <UserProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </UserProvider>
  );
}

export { AppProvider };

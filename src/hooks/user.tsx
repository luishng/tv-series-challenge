import React, { createContext, useState, useContext, ReactNode } from "react";

interface UserContextData {
  user: boolean;
  changeUser: (user: boolean) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState(false);

  async function changeUser(user: boolean) {
    setUser(user);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useUser };

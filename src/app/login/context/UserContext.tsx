"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types/user";

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    // ここでcookieやlocalStorageに保存してもOK
  };

  const logout = () => {
    setUser(null);
    // cookieやlocalStorageをクリアしてもOK
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserはUserProviderの中で利用してください");
  }
  return context;
};

import { createContext, useContext, useState } from "react";
import { currentUser } from "../data/mockData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (email, password) => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({ ...currentUser, email });
      setIsLoading(false);
    }, 800);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
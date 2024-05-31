import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);

  const login = (userData) => {
    console.log("login")
    setUser(userData);
  };

  const logout = () => {
    console.log("logout")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,movies,setMovies}}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export function SearchProvider({ children }) {
  const [movies, setMovies] = useState([]);

 

  return (
    <AuthContext.Provider value={{ movies,setMovies}}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useSearch() {
  return useContext(AuthContext);
}

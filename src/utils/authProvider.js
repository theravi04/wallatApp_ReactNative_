/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import React, { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Provide the context to children components
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

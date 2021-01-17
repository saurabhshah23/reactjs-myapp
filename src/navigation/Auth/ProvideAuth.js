/**
 * Context API used for Auth related information and methods.
 * I am keeping everything related to the authentication and PrivateRoute in this one file.
 */
import React, { createContext, useContext } from 'react';
import { useProvideAuth } from './useProvideAuth';

// Context API used for Auth related information and methods.
const authContext = createContext();

// Context Provider to wrap the whole app within and make auth information available.
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// Custom hook to access auth related data and methods.
// Most important hook to be used throughout
export function useAuth() {
  return useContext(authContext);
}

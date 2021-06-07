import React, {useState, useContext, createContext} from 'react';

const AuthContext = createContext();
const AuthChangeContext = createContext();

export function useAuthState() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('error')
  }
  return context;
}

export function useAuthChangeContext() {
  const context = useContext(AuthChangeContext);
  if (!context) {
    throw new Error('error')
  }
  return context;
}

export const AuthProvider = ({children}) => {

  const [user, dispatch] = useReducer(useAuthChangeContext, initialState)

  return (
    <AuthContext.Provider value={user}>
      <AuthChangeContext.Provider value={dispatch}>
        {children}
      </AuthChangeContext.Provider>
    </AuthContext.Provider>
  )
}
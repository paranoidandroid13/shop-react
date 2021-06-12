import React, {useState, useReducer, useContext, createContext} from 'react';
import Cookies from 'universal-cookie'
import auth, { initialState } from '../reducers/auth'

export const AuthContext = createContext();
export const AuthDispatchContext = createContext();
// const initialUserState = (
//   localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
// )

export const AuthProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(auth, initialState)

  return (
    <AuthContext.Provider value={userState}>
      <AuthDispatchContext.Provider value={[userState, dispatch]}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}
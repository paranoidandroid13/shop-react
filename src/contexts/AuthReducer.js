import React, { useReducer } from "react";
import Cookies from 'universal-cookie'

  // const setCookie = useEffect(() => {
  //   const cookies = new Cookies()
  //   cookies.set('example', 'value', {path: '/'})
  // }, [])

const cookies = new Cookies();
const userCookie = cookies.get('user');

const user = (userCookie ? userCookie : '')
const token = (userCookie ? userCookie.jwt : '')

export const initialState = {
  userInfo: '' || user,
  token: '' || token,
  isLoginRequest: false,
  error: ''
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST": 
    return {
      ...initialState,
      isLoginRequest: true,
    };
    case "LOGIN_SUCCESS": 
    return {
      ...initialState,
      user: action.payload.user,
      token: action.payload.jwt,
      isLoginRequest: false,
    };
    case "LOGOUT": 
    return {
      ...initialState,
      isLoginRequest: false,
    }
  }
}
import React, { useReducer } from "react";
import Cookies from 'universal-cookie'

export default function AuthReducer(user, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': 
    return {
      ...user,
      isLogIn: false,
      isLogInRequest: true,
      hasError: false,
    };
    case 'LOGIN_SUCCESS':
      return {
        ...user,
        isLogIn: true,
        isLogInRequest: false,
        hasError: false,
      };
    case 'LOGIN_ERROR':
      return {
        ...user,
        isLogIn: false,
        isLogInRequest: true,
        hasError: true,
      };
    case 'ADD_USER': 
      return {
        user: action.payload,
        isLogIn: true,
      };
    case 'ADD_USER_ERROR': 
    return {
      ...user,
      error: [action.payload]
    }
      default: 
        return user;
  }

}
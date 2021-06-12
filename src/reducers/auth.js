export const initialState = {
  email: '',
  password: '',
  isLogged: false
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
    return {
      ...state,
      test: action.payload,
    };
    case 'REGISTER': 
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    }
    default:
      return state
  }
}
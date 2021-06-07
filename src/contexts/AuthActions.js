import axios from 'axios';

const url = 'https://mockapi.42.works'

export async function login(dispatch, userPayload) {
  await axios.post(`${url}/api/sign_in`,
  {user_params: userPayload})
  
  try {
    dispatch({type: "LOGIN_REQUEST"})
    const res = await axios.post(`${url}/api/sign_in`,
    {user_params: userPayload})
  } catch(error) {
    console.log(error)
  }
}


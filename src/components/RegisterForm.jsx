import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Input from './ui/Input';
import Button from './ui/Button';
import Error from './ui/Error'

import {AuthContext, AuthDispatchContext} from '../contexts/AuthContext';

function RegisterForm(props) {

  const userContext = useContext(AuthContext);
  const addUser = useContext(AuthDispatchContext)

  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [doublePassword, setDoublePassword] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }
  const setDoublePass = (event) => {
    setDoublePassword(event.target.value)
  }

  const errors = userContext.error ? userContext.error : ''

  const register = async (event) => {
    event.preventDefault()
    if (password !== doublePassword) {
      addUser({
        type: 'ADD_USER_ERROR',
        payload: 'Password checked vailed'
      })
      return false;
    }
    await axios.post(`https://mockapi.42.works/api/sign_up`, {
      'email': email,
      'password': password,
      "password_confirmation": doublePassword
    })
    const user = {
      email,
    }
    localStorage.setItem('user', JSON.stringify(user))

    addUser({
      type: 'ADD_USER',
      payload: user
    })
    return true
  }

  return (
  // TODO: компонент ошибки

    <div>
      <h3>Register</h3>
      <form>
        <Input id="6" value={email} onChange={e => usernameHandler(e)} label='email'/>
        <Input 
          type='password' 
          value={password} 
          label='password' 
          onChange={e => passwordHandler(e)}
          id="4" 
        />
        <Input type='password' value={doublePassword} label='password' onChange={e => setDoublePass(e)}
        id="3" />
        {errors.length > 0 && errors.map((error, index) => {
          return (
            <Error key={index} text={error} />
          )
        })
      }
        <Button onClick={register} color="main" wide text="register">register</Button>
      </form>
    </div>
  )
}

export default RegisterForm
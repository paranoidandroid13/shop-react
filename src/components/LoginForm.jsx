import React, {useState, useEffect, useContext} from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

import {AuthContext, AuthDispatchContext} from '../contexts/AuthContext';

function LoginForm(props) {

  const userContext = useContext(AuthContext);
  const addUser = useContext(AuthDispatchContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const login = (event) => {
    event.preventDefault()
    const user = {
      username,
    }
    // localStorage.setItem('user', JSON.stringify(user))
    
    addUser({type: 'ADD_USER',
    payload: user})
  }

  return (
    <div>
      <h3>Log in</h3>
      <form>
      <Input id="1" value={username} onChange={e => usernameHandler(e)} label='username'/>
      <Input value={password} type="password" label='password' onChange={e => passwordHandler(e)}
      id="2" />
      <Button onClick={login} color="main" wide text="login">login</Button>
      </form>
    </div>
  )
}

export default LoginForm
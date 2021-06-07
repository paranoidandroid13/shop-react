import React, {useState, useEffect, useContext} from 'react';
import Cookies from 'universal-cookie';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

function Login(props) {
  // const cookies = new Cookies();
  // useEffect(() => {
  //   const user = {
  //     name: 'axd',
  //     age: 23,
  //   }
  //   cookies.set('example', user, {path: '/'})
  //   console.log(cookies.get('example'))
  //   const copy = cookies.get('example')
  //   console.log(copy.name)
  // }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const usernameHandler = (event) => {
    console.log(event)
    setUsername(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }
  return (
    <div>
      <h3>Log in</h3>
      <form action="submit">
      <Input id="1" value={username} onChange={e => usernameHandler(e)} placeholder='username'/>
      {username}
      <Input value={password} onChange={e => passwordHandler(e)}
      id="2" placeholder="password" />
      {password}
      <Button wide text="login"/>
      </form>
    </div>
  )
}

export default Login
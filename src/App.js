import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/sign-up" component={Register} />
      </Switch>
    </Router>
  )
}

export default App

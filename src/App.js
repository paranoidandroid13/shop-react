import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/" component={Products} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App

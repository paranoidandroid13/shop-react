import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProductsProvider } from './pages/Products'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
          <ProductsProvider>
            <Route path="/" component={ProductsProvider} />
          </ProductsProvider>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App

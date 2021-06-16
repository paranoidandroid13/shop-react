import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProductsProvider } from './pages/Products'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Counter from './components/Counter'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/test" component={Counter}/>
          <ProductsProvider>
            <Route path="/" component={ProductsProvider} />
          </ProductsProvider>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App

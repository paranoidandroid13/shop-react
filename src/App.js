import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProductsProvider } from './pages/Products'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Counter from './components/Counter'
import ProductDetail from './components/ProductDetail'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/test" component={Counter} />
          <ProductsProvider>
            <Route    render={props => {...props} /> exact path="/" component={ProductsProvider} />
            <Route exact path="/posts/:id" component={ProductDetail} />
          </ProductsProvider>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App

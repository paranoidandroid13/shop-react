import React, { useEffect, useState, useContext, createContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext'
import ProductList from '../components/ProductList'

export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const initProducts = async () => {
      const { data } = await axios(`http://localhost:3004/api/v1/posts`)
      setProducts(data.data)
    }
    initProducts()
  }, [])
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <ProductList />
    </ProductsContext.Provider>
  )
}

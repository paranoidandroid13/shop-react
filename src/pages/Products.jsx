import React, { useEffect, useState, useContext, createContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext'
import ProductList from '../components/ProductList'

export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const initProducts = async () => {
      const { data } = await axios(`https://mockapi.42.works/api/posts`)
      const publicProducts = data.data.filter((item) => {
        return !item.is_private
      })
      setProducts(publicProducts)
    }
    initProducts()
    console.log('page', products)
  }, [])
  return (
    <ProductsContext.Provider value={[products, setProducts]}> 
      <ProductList />
    </ProductsContext.Provider>
  )
}
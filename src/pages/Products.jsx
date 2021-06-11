import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext'
import ProductList from '../components/ProductList'

function Products(props) {
  // TODO: контекст возвращает только юзернейм
  // TODO: приватных постов не сущетсвует
  const userContext = useContext(AuthContext)
  const isLogged = false
  const [products, setProducts] = useState([])
  useEffect(() => {
    const initProducts = async () => {
      const { data } = await axios(`https://mockapi.42.works/api/posts`)
      const publicProducts = data.data.filter((item) => {
        return !item.is_private
      })
      setProducts(isLogged ? data.data : publicProducts)
    }

    initProducts()
  }, [])
  return (
    <ProductList products={products} />
  )
}

export default Products

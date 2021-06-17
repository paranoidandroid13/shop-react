import React, { useContext } from 'react'
import { ProductsContext } from '../pages/Products'
import ProductCard from './ProductCard'

function ProductList(props) {
  const [products, setProducts] = useContext(ProductsContext)
  const productList = products.map((item) => {
    return <ProductCard product={item} key={item.id} />
  })
  return <div>{productList}</div>
}

export default ProductList

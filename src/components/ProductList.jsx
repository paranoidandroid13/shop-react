import React, {useContext} from 'react' 
import {ProductsContext} from '../pages/Products'

function ProductList(props) {
  const [products, setProducts] = useContext(ProductsContext)
  return (
    <div>{JSON.stringify(products)}</div>
  )
}

export default ProductList
import React, { useContext } from 'react'
import { ProductsContext } from '../pages/Products'
import ProductCard from './ProductCard'
import styles from './ProductList.module.css'

function ProductList(props) {
  const [products, setProducts] = useContext(ProductsContext)

  return (
    <div className={styles.list}>
      {products.map((item, index) => {
        return <ProductCard key={item.id} product={item} />
      })}
    </div>
  )
}

export default ProductList

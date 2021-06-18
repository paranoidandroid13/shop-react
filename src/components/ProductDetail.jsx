import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])

  return <h6>{params}</h6>
}

export default ProductDetail

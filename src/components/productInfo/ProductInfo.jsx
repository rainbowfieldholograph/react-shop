import React from 'react'

const ProductInfo = ({ title, price, image }) => {
  console.log('ahwjvhjabwk')
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <img src={image} alt="product" />
    </div>
  )
}

export default ProductInfo

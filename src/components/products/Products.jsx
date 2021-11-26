import React from 'react'
import Product from '../product/Product'
import styles from './Products.module.css'
import Filter from '../filter/Filter'

const Products = ({ data }) => {
  return (
    <div className={styles.products}>
      <Filter count={data.length} />
      <div className="container">
        <div className={styles.productsItems}>
          {data.map((item) => (
            <Product title={item.title} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

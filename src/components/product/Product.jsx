import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'

const Product = ({ title, price, image }) => {
  return (
    <div className={styles.product}>
      <Link className={styles.link} to={`${title}`}>
        <img width="350" height="auto" src={image} alt="product" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </Link>
    </div>
  )
}

export default Product

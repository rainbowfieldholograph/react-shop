import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

const Product = ({ id, title, price, image }) => {
  return (
    <div className={styles.product}>
      <Link className={styles.link} to={`${id}`}>
        <img src={image} alt="product" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </Link>
    </div>
  )
}

export default Product

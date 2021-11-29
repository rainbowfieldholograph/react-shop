import React from 'react'
import styles from './CartItem.module.css'

const CartItem = ({ title, price, size, image }) => {
  return (
    <div className={styles.wrapper}>
      <img width="100px" height="auto" src={image} alt="" />
      <p>{title}</p>
      <p>{`Color: ${size}`}</p>
      <p>{price}</p>
    </div>
  )
}

export default CartItem

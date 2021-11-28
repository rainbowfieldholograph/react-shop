import React from 'react'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1>Your cart</h1>
      <p>Your cart is currently empty</p>
      <button className={styles.btn}>continue shopping</button>
    </div>
  )
}

export default Cart

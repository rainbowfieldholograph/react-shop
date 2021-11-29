import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import AppContext from '../../context/appContext'
import styles from './Cart.module.css'

const Cart = () => {
  const { findProductById } = useContext(AppContext)
  const navigate = useNavigate()
  const storageData = JSON.parse(sessionStorage.getItem('cart'))
  let findedData = null
  console.log(storageData)
  if (storageData) {
    findedData = findProductById(storageData)
  }
  console.log(findedData)
  return (
    <div className={styles.cart}>
      <h1>Your cart</h1>
      {findedData ? (
        <div>
          <p>{findedData.title}</p>
        </div>
      ) : (
        <p>Your cart is currently empty</p>
      )}

      <button onClick={() => navigate(-1)} className={styles.btn}>
        continue shopping
      </button>
    </div>
  )
}

export default Cart

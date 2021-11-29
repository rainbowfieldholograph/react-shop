import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import AppContext from '../../context/appContext'
import styles from './Cart.module.css'
import CartItem from '../../components/cartItem/CartItem'

const Cart = () => {
  const { findProductsByIds } = useContext(AppContext)
  const navigate = useNavigate()
  const storageData = JSON.parse(sessionStorage.getItem('cart'))
  let findedData = null
  if (storageData) {
    findedData = findProductsByIds(storageData)
  }
  return (
    <div className="container">
      <div className={styles.cart}>
        <h1>Your cart</h1>
        {findedData ? (
          <div className={styles.items}>
            {findedData.map((prod, index) => (
              <CartItem
                key={index}
                title={prod.title}
                price={prod.price}
                size={'S'}
                image={prod.image}
              />
            ))}
          </div>
        ) : (
          <p>Your cart is currently empty</p>
        )}

        <button onClick={() => navigate(-1)} className={styles.btn}>
          continue shopping
        </button>
      </div>
    </div>
  )
}

export default Cart

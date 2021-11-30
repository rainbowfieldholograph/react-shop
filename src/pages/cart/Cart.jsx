import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import styles from './Cart.module.css'
import CartItem from '../../components/cartItem/CartItem'
import CartContext from '../../context/cartContext'

const Cart = () => {
  const navigate = useNavigate()
  const { findCartItems } = useContext(CartContext)
  const findedData = findCartItems()
  return (
    <div className="container">
      <div className={styles.cart}>
        <h1>Your cart</h1>
        {findedData.length > 0 ? (
          <>
            <h2>Products: {findedData.length}</h2>
            <ul className={styles.items}>
              {findedData.map((prod) => (
                <CartItem
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  price={prod.price}
                  size={prod.sizes[prod.sizeId]}
                  image={prod.image}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>Your cart is currently empty</p>
        )}
        <button onClick={() => navigate(-1)} className={styles.btn}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default Cart

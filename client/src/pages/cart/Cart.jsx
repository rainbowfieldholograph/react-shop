import { useNavigate } from 'react-router'
import styles from './Cart.module.css'
import CartItem from '../../components/cartItem/CartItem'
import CartStore from '../../mobx/CartStore'
import { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading'

const Cart = () => {
  const navigate = useNavigate()
  const [cartData, setCartData] = useState()

  useEffect(() => {
    CartStore.findCartItems().then((data) => setCartData(data))
  }, [])

  return cartData ? (
    <div className="container">
      <div className={styles.cart}>
        <h1>Your cart</h1>
        {CartStore.getCartItemsCount() > 0 ? (
          <>
            <h2>Products: {cartData.length}</h2>
            <ul className={styles.items}>
              {cartData.map((prod) => (
                <CartItem
                  cartData={cartData}
                  setCartData={setCartData}
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
  ) : (
    <Loading />
  )
}

export default Cart

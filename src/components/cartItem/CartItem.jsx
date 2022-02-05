import CartStore from '../../mobx/CartStore'
import styles from './CartItem.module.css'

const CartItem = ({ id, title, price, size, image, cartData, setCartData }) => {
  return (
    <li className={styles.wrapper}>
      <img width="100px" height="auto" src={image} alt="" />
      <p>{title}</p>
      <p>Size:{size}</p>
      <p>{price}</p>
      <button
        className={styles.btn}
        onClick={() => {
          CartStore.removeCartItem(id)
          CartStore.findCartItems().then((data) => setCartData(data))
        }}
      >
        remove
      </button>
    </li>
  )
}

export default CartItem

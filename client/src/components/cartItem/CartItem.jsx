import CartStore from '../../mobx/CartStore'
import styles from './CartItem.module.css'

const CartItem = ({ id, title, price, size, image }) => {
  return (
    <li className={styles.wrapper}>
      <img width="100px" height="auto" src={image} alt="" />
      <p>{title}</p>
      <p>Size:{size}</p>
      <p>{price}</p>
      <button onClick={() => CartStore.removeCartItem(id)}>remove</button>
    </li>
  )
}

export default CartItem

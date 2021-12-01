import { useContext } from 'react'
import CartContext from '../../context/cartContext'
import styles from './CartItem.module.css'

const CartItem = ({ id, title, price, size, image }) => {
  const { removeCartItem } = useContext(CartContext)
  return (
    <li className={styles.wrapper}>
      <img width="100px" height="auto" src={image} alt="" />
      <p>{title}</p>
      <p>Size:{size}</p>
      <p>{price}</p>
      <button onClick={() => removeCartItem(id)}>remove</button>
    </li>
  )
}

export default CartItem

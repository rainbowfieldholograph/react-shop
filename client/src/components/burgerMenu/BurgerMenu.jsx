import React from 'react'
import styles from './BurgerMenu.module.css'
import searchIcon from '../../images/svg/search.svg'
import cartIcon from '../../images/svg/cart.svg'
import CartStore from '../../mobx/CartStore'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const BurgerMenu = observer(() => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.burgerCheck} id="burger-check" type="checkbox" />
      <label htmlFor="burger-check" className={styles.burger}></label>
      <div id="navigation1" className={styles.navigation}>
        <ul className={styles.links}>
          <li>
            <a className="customLink" href="#">
              Mainsite
            </a>
          </li>
          <li>
            <Link className="customLink" to="collections">
              Collections
            </Link>
          </li>
          <li>
            <a className="customLink" href="#">
              Forums
            </a>
          </li>
        </ul>
        <div className={styles.btns}>
          <button className={styles.btn}>
            <img width="18px" height="auto" src={searchIcon} alt="search" />
          </button>
          <Link to="cart" className={styles.btn}>
            <img width="18px" height="auto" src={cartIcon} alt="search" />
            <p>{CartStore.getCartItemsCount()}</p>
          </Link>
        </div>
      </div>
    </div>
  )
})

export default BurgerMenu

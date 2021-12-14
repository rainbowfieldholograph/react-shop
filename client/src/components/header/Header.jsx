import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import searchIcon from '../../images/svg/search.svg'
import cartIcon from '../../images/svg/cart.svg'
import CartStore from '../../mobx/CartStore'
import { observer } from 'mobx-react-lite'
import BurgerMenu from '../burgerMenu/BurgerMenu'

const Header = observer(() => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div>
            <Link className="customLink" to="/">
              Logo
            </Link>
          </div>
          <BurgerMenu />
        </nav>
      </div>
    </header>
  )
})

export default Header

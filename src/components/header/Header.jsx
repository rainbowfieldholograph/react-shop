import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import BurgerMenu from '../burgerMenu/BurgerMenu'

const Header = () => {
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
}

export default Header

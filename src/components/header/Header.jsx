import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import searchIcon from '../../images/svg/search.svg'
import cartIcon from '../../images/svg/cart.svg'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <nav className={styles.inner}>
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className={styles.links}>
          <a href="#">Mainsite</a>
          <a href="#">Label</a>
          <a href="#">Forums</a>
        </div>
        <div className={styles.btns}>
          <button className={styles.btn}>
            <img width="18px" height="auto" src={searchIcon} alt="search" />
          </button>
          <button className={styles.btn}>
            <img width="18px" height="auto" src={cartIcon} alt="search" />
          </button>
        </div>
      </nav>
    </div>
  </header>
)

export default Header

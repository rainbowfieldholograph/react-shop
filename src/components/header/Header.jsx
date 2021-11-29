import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import searchIcon from '../../images/svg/search.svg'
import cartIcon from '../../images/svg/cart.svg'

const Header = ({ cartCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div>
            <Link className="customLink" to="/">
              Logo
            </Link>
          </div>
          <div className={styles.links}>
            <a className="customLink" href="#">
              Mainsite
            </a>
            <Link className="customLink" to="collections">
              Collections
            </Link>
            <a className="customLink" href="#">
              Forums
            </a>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn}>
              <img width="18px" height="auto" src={searchIcon} alt="search" />
            </button>
            <Link to="cart" className={styles.btn}>
              <img width="18px" height="auto" src={cartIcon} alt="search" />
              <p>{cartCount}</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

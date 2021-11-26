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
          <Link className="customLink" to="/">
            Logo
          </Link>
        </div>
        <div className={styles.links}>
          <a className="customLink" href="#">
            Mainsite
          </a>
          <a className="customLink" href="#">
            Label
          </a>
          <a className="customLink" href="#">
            Forums
          </a>
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

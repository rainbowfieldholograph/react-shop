import React from 'react'
import styles from './Footer.module.css'
import githubIcon from '../../images/svg/github.svg'
import telegramIcon from '../../images/svg/telegram.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.link}>
        <Link to="/">Return policy</Link>
      </div>
      <div className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.contentInner}>
            <div className="">ASDASDASDASDASD</div>
            <div className={styles.social}>
              <a href="https://github.com/rainbowfieldholograph/react-shop">
                <img src={githubIcon} width="28px" height="auto" alt="github" />
              </a>
              <a href="https://t.me/dorothy111">
                <img src={telegramIcon} width="28px" height="auto" alt="telegram" />
              </a>
            </div>
          </div>
          <div className={styles.rightText}> © 2021, React-shop</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

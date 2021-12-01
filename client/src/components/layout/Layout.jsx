import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Layout.module.css'

const Layout = ({ cartCount }) => {
  return (
    <div className={styles.page}>
      <Header cartCount={cartCount} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

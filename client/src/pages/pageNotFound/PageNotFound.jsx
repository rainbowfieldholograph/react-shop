import React from 'react'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>404 Page Not Found</h1>
      <p>The page you requested does not exist.</p>
    </div>
  )
}

export default PageNotFound

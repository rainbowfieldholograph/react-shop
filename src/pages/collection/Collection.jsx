import React from 'react'
import styles from './Collection.module.css'
import Products from '../../components/products/Products'

const Collection = ({ data }) => {
  return (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>{data.title}</h1>
      </div>
      {console.log('COLLECTION: ', data)}
      <Products data={data.products} />
    </main>
  )
}

export default Collection

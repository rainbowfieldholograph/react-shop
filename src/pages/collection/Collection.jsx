import React from 'react'
import styles from './Collection.module.css'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import CollectionsData from '../../store/collectionsStore'
import { observer } from 'mobx-react-lite'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'

const Collection = observer(() => {
  const { data } = CollectionsData
  const { collection } = useParams()
  const findedData = data.find((prod) => prod.title === collection)
  return findedData ? (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>{findedData.title}</h1>
      </div>
      <div className={styles.products}>
        <Filter count={findedData.products.length} />
        <div className="container">
          <div className={styles.productsItems}>
            {findedData.products.map((item, index) => (
              <Product key={index} title={item.title} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  ) : (
    <PageNotFound />
  )
})

export default Collection

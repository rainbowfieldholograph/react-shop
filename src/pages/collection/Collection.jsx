import React, { useContext } from 'react'
import styles from './Collection.module.css'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'
import AppContext from '../../context/appContext'

const Collection = () => {
  const data = useContext(AppContext)
  const { collection } = useParams() //get collection url
  const findedCol = data.findCollectionById(collection)
  const findedProds = findedCol?.getProducts()
  return findedCol ? (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>{findedCol.title}</h1>
      </div>
      <div className={styles.products}>
        <Filter count={findedProds.length} />
        <div className="container">
          <div className={styles.productsItems}>
            {findedProds.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  ) : (
    <PageNotFound />
  )
}

export default Collection

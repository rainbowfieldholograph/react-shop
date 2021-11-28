import React from 'react'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import CollectionsData from '../../store/collectionsStore'
import { observer } from 'mobx-react-lite'
import styles from './ProductInfo.module.css'

const findProduct = (data, product, collection) => {
  return data
    .find((col) => col.title === collection)
    .products.find((prod) => prod.title === product)
}

const ProductInfo = observer(() => {
  const { data } = CollectionsData
  const { product, collection } = useParams()
  const findedData = findProduct(data, product, collection)
  return findedData ? (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img width="100%" src={findedData.image} alt="product" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{findedData.title}</h1>
          <h2 className={styles.price}>{findedData.price}</h2>
          {findedData.sizes && (
            <div className={styles.sizeWrapper}>
              <p className={styles.sizeTitle}>Size</p>
              <select className={styles.sizeSelect} id="size">
                {findedData.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button className={styles.addBtn}>
            <p>Add to cart</p>
          </button>
          <div className={styles.descr}>
            <p>{findedData.descr}</p>
          </div>
          {findedData.benefits && (
            <ul className={styles.benefits}>
              {findedData.benefits.map((benefit) => (
                <li>{benefit}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  )
})

export default ProductInfo

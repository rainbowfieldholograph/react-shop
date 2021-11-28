import React, { useContext } from 'react'
import { useParams } from 'react-router'
import AppContext from '../../context/appContext'
import PageNotFound from '../pageNotFound/PageNotFound'
import styles from './ProductInfo.module.css'

const addItemToStorage = (id) => {
  sessionStorage.setItem('cart', id)
}

const ProductInfo = () => {
  const collections = useContext(AppContext)
  const { product, collection } = useParams()
  console.log(collections)
  const findedData = collections
    .findCollectionById(collection)
    .getProducts()
    .find((prod) => prod.id === product) //find collection and product by url
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
          <button onClick={addItemToStorage(findedData.id)} className={styles.addBtn}>
            <p>Add to cart</p>
          </button>
          <div className={styles.descr}>
            <p>{findedData.descr}</p>
          </div>
          {findedData.benefits && (
            <ul className={styles.benefits}>
              {findedData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  )
}

export default ProductInfo

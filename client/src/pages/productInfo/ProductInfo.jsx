import React, { useContext, useRef } from 'react'
import { useParams } from 'react-router'
import AppContext from '../../context/appContext'
import CartContext from '../../context/cartContext'
import PageNotFound from '../pageNotFound/PageNotFound'
import styles from './ProductInfo.module.css'

const ProductInfo = () => {
  const appData = useContext(AppContext)
  const { addNewCartItem } = useContext(CartContext)
  const { product, collection } = useParams()
  const findedProduct = appData.findCollectionById(collection)?.getProductById(product)
  const sizeRef = useRef()
  return findedProduct ? (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img width="100%" src={findedProduct.image} alt="product" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{findedProduct.title}</h1>
          <h2 className={styles.price}>{findedProduct.price}</h2>
          {findedProduct.sizes && (
            <div className={styles.sizeWrapper}>
              <p className={styles.sizeTitle}>Size</p>
              <select ref={sizeRef} className={styles.sizeSelect} id="size">
                {findedProduct.sizes.map((size, index) => (
                  <option key={index} value={index}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={() => addNewCartItem(findedProduct.id, sizeRef.current.value)}
            className={styles.addBtn}
          >
            <p>Add to cart</p>
          </button>
          <div className={styles.descr}>
            <p>{findedProduct.descr}</p>
          </div>
          {findedProduct.benefits && (
            <ul className={styles.benefits}>
              {findedProduct.benefits.map((benefit, index) => (
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

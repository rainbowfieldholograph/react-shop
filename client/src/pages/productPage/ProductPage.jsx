import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api'
import CartStore from '../../mobx/CartStore'
import PageNotFound from '../pageNotFound/PageNotFound'
import styles from './ProductPage.module.css'

const ProductPage = () => {
  const [prodData, setProdData] = useState()
  const sizeRef = useRef()
  const { product } = useParams()

  useEffect(() => {
    api.getOneProduct(product).then(({ data }) => setProdData(data))
  }, [product])

  if (!prodData) return <div>Loading...</div>

  return prodData ? (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img width="100%" src={prodData.image} alt="product" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{prodData.title}</h1>
          <h2 className={styles.price}>{prodData.price}</h2>
          {prodData.sizes && (
            <div className={styles.sizeWrapper}>
              <p className={styles.sizeTitle}>Size</p>
              <select ref={sizeRef} className={styles.sizeSelect} id="size">
                {prodData.sizes.map((size, index) => (
                  <option key={index} value={index}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={() => CartStore.addNewCartItem(prodData.id, sizeRef.current.value)}
            className={styles.addBtn}
          >
            <p>Add to cart</p>
          </button>
          <div className={styles.descr}>
            <p>{prodData.descr}</p>
          </div>
          {prodData.benefits && (
            <ul className={styles.benefits}>
              {prodData.benefits.map((benefit, index) => (
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

export default ProductPage

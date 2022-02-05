import { useRef, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/api'
import Loading from '../../components/loading/Loading'
import { useFetching } from '../../hooks/useFetching'
import CartStore from '../../mobx/CartStore'
import ErrorBlock from '../errorBlock/ErrorBlock'
import PageNotFound from '../pageNotFound/PageNotFound'
import styles from './ProductPage.module.css'

const ProductPage = () => {
  const [productData, setProductData] = useState()
  const sizeRef = useRef()
  const { product, collection } = useParams()
  const [isLoading, error] = useFetching(async () => {
    const { data } = await api.getOneProduct(product)
    setProductData(data)
  })

  if (error) return <ErrorBlock />
  if (isLoading) return <Loading />
  if (!productData || +collection !== productData.collectionId) return <PageNotFound />

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img width="100%" src={productData.image} alt="product" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{productData.title}</h1>
          <h2 className={styles.price}>{productData.price}</h2>
          {productData.sizes && (
            <div className={styles.sizeWrapper}>
              <p className={styles.sizeTitle}>Size</p>
              <select ref={sizeRef} className={styles.sizeSelect} id="size">
                {productData.sizes.map((size, index) => (
                  <option key={index} value={index}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={() => CartStore.addNewCartItem(productData.id, sizeRef.current.value)}
            className={styles.addBtn}
          >
            <p>Add to cart</p>
          </button>
          <div className={styles.descr}>
            <p>{productData.descr}</p>
          </div>
          {productData.benefits && (
            <ul className={styles.benefits}>
              {productData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPage

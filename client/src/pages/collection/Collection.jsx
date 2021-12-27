import { useState } from 'react'
import styles from './Collection.module.css'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import ProductCard from '../../components/productCard/ProductCard'
import Filter from '../../components/filter/Filter'
import { observer } from 'mobx-react-lite'
import api from '../../api/api'
import Loading from '../../components/loading/Loading'
import { useFetching } from '../../hooks/useFetching'
import ErrorBlock from '../errorBlock/ErrorBlock'

const Collection = observer(() => {
  const { collection } = useParams()
  const [collectionData, setCollectionData] = useState()

  const [isLoading, error] = useFetching(async () => {
    const { data } = await api.getOneCollection(collection)
    setCollectionData(data)
  })

  if (error) return <ErrorBlock />
  if (isLoading) return <Loading />
  if (!collectionData) return <PageNotFound />

  return (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>{collectionData.title}</h1>
      </div>
      <div className={styles.products}>
        <Filter count={collectionData.products.length} />
        <div className="container">
          <ul className={styles.productsList}>
            {collectionData.products.map((product) => (
              <li key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
})

export default Collection

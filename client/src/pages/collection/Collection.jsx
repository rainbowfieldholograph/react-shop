import { useState } from 'react'
import styles from './Collection.module.css'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'
import { observer } from 'mobx-react-lite'
import api from '../../api/api'
import Loading from '../../components/loading/Loading'
import { useFetching } from '../../hooks/useFetching'
import ErrorBlock from '../errorBlock/ErrorBlock'

const Collection = observer(() => {
  const { collection } = useParams()
  const [colData, setColData] = useState()

  const [isLoading, error] = useFetching(async () => {
    const { data } = await api.getOneCollection(collection)
    setColData(data)
  })

  if (error) return <ErrorBlock />
  if (isLoading) return <Loading />
  if (!colData) return <PageNotFound />

  return (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>{colData.title}</h1>
      </div>
      <div className={styles.products}>
        <Filter count={colData.products.length} />
        <div className="container">
          <div className={styles.productsItems}>
            {colData.products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
})

export default Collection

import { useEffect, useState } from 'react'
import styles from './Collection.module.css'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'
// import DataStore from '../../mobx/DataStore'
import { observer } from 'mobx-react-lite'
import api from '../../api/api'

const Collection = observer(() => {
  const { collection } = useParams()
  const [colData, setColData] = useState()

  useEffect(() => {
    api.getOneCollection(collection).then(({ data }) => setColData(data))
  }, [collection])

  if (!colData) return <div>Loading...</div>

  return colData ? (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>{colData.title}</h1>
      </div>
      <div className={styles.products}>
        <Filter count={colData.products.length} />
        <div className="container">
          <div className={styles.productsItems}>
            {colData.products.map((item) => (
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
})

export default Collection

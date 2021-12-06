import { useEffect } from 'react'
import styles from './Collection.module.css'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'
import DataStore from '../../mobx/DataStore'
import { observer } from 'mobx-react-lite'

const Collection = observer(() => {
  useEffect(() => {
    DataStore.fetchProducts()
  }, [])

  const { collection } = useParams() //get collection url
  // const findedCol = appData.findCollectionById(collection)
  const findedProds = DataStore.findCollectionProducts(collection)
  console.log(findedProds)
  return true ? (
    <main className={styles.collection}>
      <div className={styles.title}>
        <h1>sss</h1>
      </div>
      <div className={styles.products}>
        <Filter count={findedProds.length} />
        <div className="container">
          <div className={styles.productsItems}>
            {findedProds.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.name}
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

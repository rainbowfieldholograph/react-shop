import { useEffect } from 'react'
import styles from './Home.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import { observer } from 'mobx-react-lite'
import DataStore from '../../mobx/DataStore'
import Loading from '../../components/loading/Loading'

const Home = observer(() => {
  useEffect(() => {
    DataStore.fetchCollections()
  }, [])

  if (DataStore.loading) return <Loading />

  return (
    <main className={styles.home}>
      <div className="container">
        <ul className={styles.bigItems}>
          {DataStore.collections.map((col, index) => {
            return (
              index < 2 && (
                <li key={col.id}>
                  <CollectionCard
                    title={col.title}
                    linkTo={`collections/${col.id}`}
                    image={col.image}
                  />
                </li>
              )
            )
          })}
        </ul>
      </div>
    </main>
  )
})

export default Home

import { useEffect } from 'react'
import styles from './Collections.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import DataStore from '../../mobx/DataStore'
import { observer } from 'mobx-react-lite'

const Collections = observer(() => {
  useEffect(() => {
    DataStore.fetchCollections()
  }, [])

  return (
    <div className={styles.collections}>
      <div className="container">
        <h1 className={styles.title}>Collections</h1>
        <ul className={styles.items}>
          {DataStore.collections.map((col) => (
            <li key={col.id} className={styles.card}>
              <CollectionCard title={col.name} linkTo={`${col.id}`} image={col.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Collections

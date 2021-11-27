import React from 'react'
import styles from './Collections.module.css'
import CollectionsData from '../../store/collectionsStore'
import { observer } from 'mobx-react-lite'
import CollectionCard from '../../components/collectionCard/CollectionCard'

const Collections = observer(() => {
  const { data } = CollectionsData
  return (
    <div className={styles.collections}>
      <div className="container">
        <h1 className={styles.title}>Collections</h1>
        <ul className={styles.items}>
          {data.map((col, index) => (
            <li className={styles.card}>
              <CollectionCard
                key={index}
                title={col.title}
                linkTo={`${col.title}`}
                image={col.products[0].image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Collections

import React, { useContext } from 'react'
import styles from './Collections.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import AppContext from '../../context/appContext'

const Collections = () => {
  const { collections } = useContext(AppContext)
  return (
    <div className={styles.collections}>
      <div className="container">
        <h1 className={styles.title}>Collections</h1>
        <ul className={styles.items}>
          {collections.map((col) => (
            <li className={styles.card}>
              <CollectionCard
                key={col.id}
                title={col.title}
                linkTo={`${col.id}`}
                image={col.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Collections

import React, { useContext } from 'react'
import styles from './Collections.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import AppContext from '../../context/appContext'

const Collections = () => {
  const appData = useContext(AppContext)
  return (
    <div className={styles.collections}>
      <div className="container">
        <h1 className={styles.title}>Collections</h1>
        <ul className={styles.items}>
          {appData.collections.map((col) => (
            <li key={col.id} className={styles.card}>
              <CollectionCard title={col.title} linkTo={`${col.id}`} image={col.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Collections

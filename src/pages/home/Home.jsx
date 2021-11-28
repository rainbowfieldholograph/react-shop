import React, { useContext } from 'react'
import styles from './Home.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import AppContext from '../../context/appContext'

const Home = () => {
  const { collections } = useContext(AppContext)
  return (
    <main className={styles.home}>
      <div className="container">
        <ul className={styles.bigItems}>
          {collections.map((col, index) => {
            return (
              index < 2 && (
                <li>
                  <CollectionCard
                    key={col.id}
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
}

export default Home

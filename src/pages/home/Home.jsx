import React from 'react'
import styles from './Home.module.css'
import CollectionsData from '../../store/collectionsStore'
import { observer } from 'mobx-react-lite'
import CollectionCard from '../../components/collectionCard/CollectionCard'

const Home = observer(() => {
  const { data } = CollectionsData
  return (
    <main className={styles.home}>
      <div className="container">
        <ul className={styles.bigItems}>
          {data.map((item, index) => {
            return (
              index < 2 && (
                <li>
                  <CollectionCard
                    key={index}
                    title={item.title}
                    linkTo={`collections/${item.title}`}
                    image={item.products[0].image}
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

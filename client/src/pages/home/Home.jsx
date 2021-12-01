import { useContext } from 'react'
import styles from './Home.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import AppContext from '../../context/appContext'

const Home = () => {
  const appData = useContext(AppContext)
  return (
    <main className={styles.home}>
      <div className="container">
        <ul className={styles.bigItems}>
          {appData.collections.map((col, index) => {
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
}

export default Home

import styles from './Home.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import { observer } from 'mobx-react-lite'
import DataStore from '../../mobx/DataStore'
import Loading from '../../components/loading/Loading'
import { useFetching } from '../../hooks/useFetching'
import ErrorBlock from '../errorBlock/ErrorBlock'

const Home = observer(() => {
  const { fetchCollections, collections } = DataStore
  const [isLoading, error] = useFetching(async () => {
    fetchCollections()
  })

  if (error) return <ErrorBlock />
  if (isLoading) return <Loading />

  return (
    <main className={styles.home}>
      <div className="container">
        <ul className={styles.bigItems}>
          {collections.map((col) => {
            return (
              <li key={col.id}>
                <CollectionCard
                  title={col.title}
                  linkTo={`collections/${col.id}`}
                  image={col.image}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
})

export default Home

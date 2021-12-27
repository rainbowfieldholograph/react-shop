import styles from './Collections.module.css'
import CollectionCard from '../../components/collectionCard/CollectionCard'
import DataStore from '../../mobx/DataStore'
import { observer } from 'mobx-react-lite'
import { useFetching } from '../../hooks/useFetching'
import ErrorBlock from '../errorBlock/ErrorBlock'
import Loading from '../../components/loading/Loading'

const Collections = observer(() => {
  const { fetchCollections, collections } = DataStore
  const [isLoading, error] = useFetching(async () => fetchCollections())

  if (error) return <ErrorBlock />
  if (isLoading) return <Loading />

  return (
    <div className={styles.collections}>
      <div className="container">
        <h1 className={styles.title}>Collections</h1>
        <ul className={styles.items}>
          {collections.map((collection) => (
            <li key={collection.id}>
              <CollectionCard
                title={collection.title}
                linkTo={`${collection.id}`}
                image={collection.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Collections

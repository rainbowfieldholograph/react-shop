import styles from './Filter.module.css'

const Filter = ({ count }) => {
  return (
    <div className={styles.filter}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.filters}>
            <div>
              <label htmlFor="types">Filter by</label>
              <select id="types">
                <option value="all">All products</option>
                <option value="snale">snale</option>
              </select>
            </div>
            <div>
              <label htmlFor="types">Sort by</label>
              <select id="types">
                <option value="all">Featured</option>
                <option value="snale">Best selling</option>
              </select>
            </div>

            <div></div>
          </div>

          <div>
            <p>{count} products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter

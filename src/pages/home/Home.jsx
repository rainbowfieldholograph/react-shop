import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = ({ data }) => {
  return (
    <main className={styles.home}>
      <div className="container">
        <div className={styles.bigItems}>
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                style={{ '--text': `'${item.title}'` }}
                className={styles.bigCard}
                to={`collections/${item.title}`}
              >
                <img width="100%" src={item.products[0].image} alt="product" />
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CollectionCard.module.css'

const CollectionCard = ({ linkTo, title, image }) => (
  <Link style={{ '--text': `'${title}'` }} className={styles.bigCard} to={linkTo}>
    <img className={styles.image} src={image} alt="product" />
  </Link>
)

export default CollectionCard

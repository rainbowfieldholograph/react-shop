import styles from './ReturnPolicy.module.css'

const ReturnPolicy = () => {
  return (
    <main className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Return Policy</h1>
        <div className={styles.textBox}>
          <p>wtf. you dont have anything to return</p>
          <p>¯\_(ツ)_/¯</p>
        </div>
      </div>
    </main>
  )
}

export default ReturnPolicy

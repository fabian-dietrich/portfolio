import { partners } from '../../data/projects'
import styles from './Partners.module.css'

function Partners() {
  return (
    <section className={styles.partners}>
      <h2 className={styles.sectionTitle}>Organisations I've had the pleasure of working with</h2>
      <ul className={styles.list}>
        {partners.map(partner => (
          <li key={partner} className={styles.partner}>{partner}</li>
        ))}
      </ul>
      <p className={styles.footnote}>And other organisations navigating an increasingly digital reality.</p>
    </section>
  )
}

export default Partners
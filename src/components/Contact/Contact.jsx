import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Work With Me</h2>
      <p className={styles.intro}>
        Available for full-time roles and freelance projects based in Berlin or remotely.
      </p>
      <div className={styles.links}>
        <a href="mailto:edit.this.later@email.biz" className={styles.link}>Email</a>
        <a href="https://linkedin.com/in/fabian-dietrich" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/fabian-dietrich" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  )
}

export default Contact
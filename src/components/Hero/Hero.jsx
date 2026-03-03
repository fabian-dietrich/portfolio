import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>Fabian Dietrich</h1>
        <h2 className={styles.title}>Interface Designer & Full-Stack Developer</h2>
        <p className={styles.intro}>
          I design and build digital products from initial concept to deployed software. 
          With a background in Interface Design and hands-on experience across the full 
          development stack, I translate user needs into experiences that deliver.
        </p>
        <p className={styles.intro}>
          I've helped organisations identify operational challenges, turn them into design 
          solutions, and build the software to implement them. Whether embedded in a team 
          or working independently, I get up to speed quickly and focus on outcomes that 
          matter to the people using the product.
        </p>
        <a href="#contact" className={styles.cta}>Work With Me</a>
      </div>
    </section>
  )
}

export default Hero
import styles from './ProjectCard.module.css'

function ProjectCard({ title, tagline, description, tags, projectUrl, liveUrl }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags}>
          {tags.map(tag => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className={styles.links}>
        <a href={projectUrl} className={styles.primaryLink}>View Project</a>
        {liveUrl && (
          <a href={liveUrl} className={styles.secondaryLink} target="_blank" rel="noopener noreferrer">
            Live App ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectGrid.module.css'

function ProjectGrid({ title, projects }) {
  return (
    <section className={styles.grid}>
      <div className={styles.inner}>
        <div className={styles.labelColumn}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        <div className={styles.cards}>
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGrid
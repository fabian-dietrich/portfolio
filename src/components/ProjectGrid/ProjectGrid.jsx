import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectGrid.module.css'

function ProjectGrid({ title, projects }) {
  return (
    <section className={styles.grid}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.cards}>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectGrid
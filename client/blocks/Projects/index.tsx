import Header from '@/components/Header'
import React from 'react'
import Project from './Project'
import styles from './styles.module.css'
import { getProjects } from '@/api'

const Projects: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
  const projects = await getProjects()

  return (
    <section {...props}>
      <Header level='2' className={styles.projects}>Projects</Header>
      {projects.map((project) => (
        <Project key={project.name} className={styles.project} name={project.name} description={project.description} demoURL={project.demoURL} codeURL={project.codeURL} />
      ))}
    </section>
  )
}

export default Projects
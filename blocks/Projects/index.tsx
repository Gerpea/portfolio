import Header from '@/components/Header'
import React from 'react'
import Project from './Project'
import styles from './styles.module.css'

const Projects: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
  return (
    <section {...props}>
        <Header level='2' className={styles.projects}>Projects</Header>
        <Project className={styles.project}/>
        <Project className={styles.project}/>
        <Project className={styles.project}/>
    </section>
  )
}

export default Projects
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'
import Header from '@/components/Header'
import { getProjects } from '@/api'
import styles from './styles.module.css'
import Project from './Project'

const Projects: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
  const t = await getTranslations('Main')
  const locale = await getLocale()
  const projects = await getProjects({ locale })

  return (
    <section {...props}>
      <Header level='2' className={styles.projects}>{t('projects')}</Header>
      {projects.map((project) => (
        <Project key={project.name} className={styles.project} name={project.name} description={project.description} demoURL={project.demoURL} codeURL={project.codeURL} collapse_btn={t('collapse_btn')} expand_btn={t('expand_btn')} />
      ))}
    </section>
  )
}

export default Projects
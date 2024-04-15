import React from 'react'
import Header from '@/components/Header'
import Period from './Period'
import styles from './styles.module.css'
import experiences from '@/data/experiences.json'

const Experience: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
  const mappedExperiences = experiences.map((experience) => ({
    ...experience,
    from: new Date(experience.from),
    to: new Date(experience.to)
  }))

  return (
    <section {...props}>
      <Header level='2' className={styles.header}>
        Work experience
      </Header>
      {mappedExperiences.map((experience) => (
        <Period key={experience.name} className={styles.period} {...experience} />
      ))}
    </section>
  )
}

export default Experience
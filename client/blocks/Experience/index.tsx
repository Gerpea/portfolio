import React from 'react'
import Header from '@/components/Header'
import Period from './Period'
import styles from './styles.module.css'
import { getWorks } from '@/api'

const Experience: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
  const works = await getWorks()

  return (
    <section {...props}>
      <Header level='2' className={styles.header}>
        Work experience
      </Header>
      {works.map((work) => (
        <Period key={work.name} className={styles.period} name={work.name} description={work.description} from={work.from} to={work.to} />
      ))}
    </section>
  )
}

export default Experience
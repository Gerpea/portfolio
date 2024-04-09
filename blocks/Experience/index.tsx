import React from 'react'
import Header from '@/components/Header'
import Period from './Period'
import styles from './styles.module.css'

const Experience: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
  return (
    <section {...props}>
      <Header level='2' className={styles.header}>
        Work experience
      </Header>
      <Period className={styles.period} />
      <Period className={styles.period} />
      <Period className={styles.period} />
    </section>
  )
}

export default Experience
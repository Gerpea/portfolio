import React from 'react'
import Header from '@/components/Header'
import Period from './Period'
import styles from './styles.module.css'
import { getWorks } from '@/api'
import Text from '@/components/Text'
import { differenceInDays } from 'date-fns'

const Experience: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
  const works = await getWorks()

  const totalDays = works.reduce((acc, work) => {
    const dateDiff = differenceInDays(work.to || new Date(), work.from)
    return acc + dateDiff
  }, 0);
  const totalYears = Math.floor(totalDays / 365)
  const totalMonths = Math.floor((totalDays - (totalYears * totalDays)) / 30)
  
  return (
    <section {...props}>
      <div className={styles.header}>
        <Header level='2'>
          Work experience
        </Header>
        <Text className={styles.totalYears}><span className={styles.yearsNumber}>{totalYears}.{totalMonths}</span></Text>
      </div>
      {works.map((work) => (
        <Period key={work.name} className={styles.period} name={work.name} description={work.description} from={work.from} to={work.to} />
      ))}
    </section>
  )
}

export default Experience
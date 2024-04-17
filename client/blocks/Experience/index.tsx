import React from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { differenceInDays } from 'date-fns'
import { getWorks } from '@/api'
import Header from '@/components/Header'
import Text from '@/components/Text'
import Period from './Period'
import styles from './styles.module.css'

const Experience: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
  const t = await getTranslations('Main')
  const locale = await getLocale()
  const works = await getWorks({ locale })

  const totalDays = works.reduce((acc, work) => {
    const dateDiff = differenceInDays(work.to || new Date(), work.from)
    return acc + dateDiff
  }, 0);
  const totalYears = Math.floor(totalDays / 365)
  const totalMonths = Math.floor((totalDays - (totalYears * 365)) / 30)

  return (
    <section {...props}>
      <div className={styles.header}>
        <Header level='2'>
          {t('experience')}
        </Header>
        <Text className={styles.totalYears}><span className={styles.yearsNumber}>{totalYears}.{totalMonths}</span></Text>
      </div>
      {works.map((work) => (
        <Period key={work.name} className={styles.period} name={work.name} description={work.description} from={work.from} to={work.to} collapse_btn={t('collapse_btn')} expand_btn={t('expand_btn')} />
      ))}
    </section>
  )
}

export default Experience
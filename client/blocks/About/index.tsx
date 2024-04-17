import React from 'react'
import Header from '@/components/Header'
import Text from '@/components/Text'
import styles from './styles.module.css'
import { getAbout } from '@/api'
import { getTranslations, getLocale } from 'next-intl/server'

const About: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
    const t = await getTranslations('Main')
    const locale = await getLocale()
    const about = await getAbout({ locale })

    return (
        <section {...props}>
            <Header level='2' className={styles.header}>
                {t('about')}
            </Header>
            <Text>
                {about.description}
            </Text>
        </section>
    )
}

export default About
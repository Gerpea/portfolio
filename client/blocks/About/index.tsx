import React from 'react'
import Header from '@/components/Header'
import Text from '@/components/Text'
import styles from './styles.module.css'
import { getAbout } from '@/api'

const About: React.FC<React.HTMLProps<HTMLElement>> = async (props) => {
    const about = await getAbout()
    return (
        <section {...props}>
            <Header level='2' className={styles.header}>
                About
            </Header>
            <Text>
                {about.description}
            </Text>
        </section>
    )
}

export default About
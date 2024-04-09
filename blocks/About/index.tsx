import React from 'react'
import Header from '@/components/Header'
import Text from '@/components/Text'
import styles from './styles.module.css'

const About: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
    return (
        <section {...props}>
            <Header level='2' className={styles.header}>
                About
            </Header>
            <Text>
                For a past year passively learn machine learning and data analysis, would be cool if we could bring machine learning to world of frontend
            </Text>
        </section>
    )
}

export default About
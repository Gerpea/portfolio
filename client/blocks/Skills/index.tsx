import React from 'react'
import { getTranslations } from 'next-intl/server'
import Header from '@/components/Header'
import Text from '@/components/Text'
import Progress from '@/components/Progress'
import { getSkills } from '@/api';
import styles from './styles.module.css'

const Skills: React.FC<React.HTMLProps<HTMLElement>> = async ({ className, ...props }) => {
    const t = await getTranslations('Main')
    const skills = await getSkills()

    return (
        <section className={`${styles.container} ${className}`} {...props}>
            <Header level='2' className={styles.header}>{t('skills')}</Header>
            <div className={styles.skills}>
                {...skills.map((skill) => (
                    <Progress value={skill.value} text={skill.name} className={styles.skill} />
                ))}
            </div>
        </section>
    )
}

export default Skills
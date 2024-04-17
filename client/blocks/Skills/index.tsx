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
                <div className={styles.skillNames}>
                    {...skills.map((skill) => (
                        <Text key={skill.name} className={styles.skillName}>{skill.name}</Text>
                    ))}
                </div>
                <div className={styles.skillValues}>
                    {...skills.map((skill) => (
                        <Progress key={skill.name} value={skill.value} className={styles.skillValue} />
                    ))}
                </div>
            </div>
            <div className={styles.skillsDesktop}>
                {...skills.map((skill) => (
                    <div key={skill.name} className={styles.skill}>
                        <Text className={styles.skillName}>{skill.name}</Text>
                        <Progress value={skill.value} className={styles.skillValue} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
"use client";

import React, { useCallback, useMemo, useState } from 'react'
import Header from '@/components/Header'
import Text from '@/components/Text'
import Progress from '@/components/Progress'
import styles from './styles.module.css'
import Button from '@/components/Button'
import useToggle from '@/hooks/useToggle';

const skills = [
    {
        name: 'ReactJS',
        value: 85
    },
    {
        name: 'NextJS',
        value: 85
    },
    {
        name: 'JS',
        value: 85
    },
    {
        name: 'TS',
        value: 85
    }
]

const Skills: React.FC<React.HTMLProps<HTMLElement>> = ({ className, ...props }) => {
    const [expanded, toggleExpand] = useToggle(false)

    const displayedSkills = useMemo(() => {
        if (expanded) {
            return skills
        } else {
            return skills.slice(0, 2)
        }
    }, [expanded])

    return (
        <section className={`${styles.container} ${className}`} {...props}>
            <Header level='2' className={styles.header}>Skills</Header>
            <div className={styles.skills}>
                <div className={styles.skillNames}>
                    {...displayedSkills.map((skill) => (
                        <Text key={skill.name} className={styles.skillName}>{skill.name}</Text>
                    ))}
                </div>
                <div className={styles.skillValues}>
                    {...displayedSkills.map((skill) => (
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
            <Button appear='underline' className={styles.button} onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</Button>
        </section>
    )
}

export default Skills
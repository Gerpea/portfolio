"use client";

import React, { useCallback, useMemo, useState } from 'react'
import Header from '@/components/Header'
import Text from '@/components/Text'
import Progress from '@/components/Progress'
import styles from './styles.module.css'
import Button from '@/components/Button'
import useToggle from '@/hooks/useToggle';
import skills from '@/data/skills.json'

const Skills: React.FC<React.HTMLProps<HTMLElement>> = ({ className, ...props }) => {
    const [expanded, toggleExpand] = useToggle(false)

    return (
        <section className={`${styles.container} ${className}`} {...props}>
            <Header level='2' className={styles.header}>Skills</Header>
            <div className={`${styles.skills} ${expanded ? styles.skillsExpanded : styles.skillsCollapsed}`}>
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
            <Button appear='underline' className={styles.button} onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</Button>
        </section>
    )
}

export default Skills
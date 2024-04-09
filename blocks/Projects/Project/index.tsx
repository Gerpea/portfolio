"use client";
import React from 'react'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from '@/components/Link'
import Text from '@/components/Text'
import useToggle from '@/hooks/useToggle'
import styles from './styles.module.css'

type Props = {}

const Project: React.FC<React.HTMLProps<HTMLDivElement>> = (props: Props) => {
    const [expanded, toggleExpand] = useToggle(false);

    return (
        <div {...props}>
            <Header level='3' className={styles.header}>TODO AI</Header>
            <Text className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed}`}>Todo app with drag and drop on grid layout, also voice has voice control for add/remove task</Text>
            <div className={styles.footer}>
                <Link>Demo</Link>
                <Link>Code</Link>
                <Button appear='underline' className={styles.button} onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</Button>
            </div>
        </div>
    )
}

export default Project
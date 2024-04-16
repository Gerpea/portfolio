"use client";

import React from 'react'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from '@/components/Link'
import Text from '@/components/Text'
import useToggle from '@/hooks/useToggle'
import styles from './styles.module.css'

interface Props extends React.HTMLProps<HTMLDivElement> {
    name: string;
    description: string;
    demoURL?: string;
    codeURL?: string;
}

const Project: React.FC<Props> = ({ name, description, demoURL, codeURL, ...rest }) => {
    const [expanded, toggleExpand] = useToggle(false);

    return (
        <div {...rest}>
            <Header level='3' className={styles.header}>{name}</Header>
            <Text className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed}`}>{description}</Text>
            <div className={styles.footer}>
                {demoURL && <Link href={demoURL}>Demo</Link>}
                {codeURL && <Link href={codeURL}>Code</Link>}
                <Button appear='underline' className={styles.button} onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</Button>
            </div>
        </div>
    )
}

export default Project
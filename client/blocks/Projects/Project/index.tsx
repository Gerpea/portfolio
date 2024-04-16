"use client";

import React, { useCallback, useState } from 'react'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from '@/components/Link'
import Text from '@/components/Text'
import useToggle from '@/hooks/useToggle'
import styles from './styles.module.css'
import Markdown from 'react-markdown';

interface Props extends React.HTMLProps<HTMLDivElement> {
    name: string;
    description: string;
    demoURL?: string;
    codeURL?: string;
}

const Project: React.FC<Props> = ({ name, description, demoURL, codeURL, ...rest }) => {
    const [expanded, toggleExpand] = useToggle(false);
    const [hover, setHover] = useState(false);
    const handleHover = useCallback(() => setHover(true), [])
    const handleUnHover = useCallback(() => setHover(false), [])

    return (
        <div {...rest}>
            <Header level='3' className={styles.header}>{name}</Header>
            <Markdown className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed} ${hover ? styles.textPreExpand : ''}`}>
                {description}
            </Markdown>
            <div className={styles.footer}>
                {demoURL && <Link href={demoURL}>Demo</Link>}
                {codeURL && <Link href={codeURL}>Code</Link>}
                <Button appear='underline' className={styles.button} onClick={toggleExpand} onMouseEnter={handleHover} onMouseLeave={handleUnHover}>{expanded ? 'Collapse' : 'Expand'}</Button>
            </div>
        </div>
    )
}

export default Project
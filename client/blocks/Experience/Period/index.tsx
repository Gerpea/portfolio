"use client";

import React, { useCallback, useState } from 'react'
import DateText from '@/components/DateText'
import Header from '@/components/Header'
import Text from '@/components/Text'
import useToggle from '@/hooks/useToggle'
import Button from '@/components/Button';
import styles from './styles.module.css'
import Markdown from 'react-markdown';

interface Props extends React.HTMLProps<HTMLDivElement> {
    name: string;
    description: string;
    from: Date;
    to: Date;
    collapse_btn: string;
    expand_btn: string;
}

const Period: React.FC<Props> = ({ name, description, from, to, className, collapse_btn, expand_btn, ...rest }) => {
    const [expanded, toggleExpand] = useToggle(false);
    const [hover, setHover] = useState(false);
    const handleHover = useCallback(() => setHover(true), [])
    const handleUnHover = useCallback(() => setHover(false), [])

    return (
        <div className={`${styles.container} ${className}`} {...rest}>
            <div className={styles.header}>
                <Header level='3'>{name}</Header>
                <DateText from={from} to={to} />
            </div>
            <Markdown className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed} ${hover ? styles.textPreExpand : ''}`}>
                {description}
            </Markdown>
            <Button appear='underline' className={styles.button} onClick={toggleExpand} onMouseEnter={handleHover} onMouseLeave={handleUnHover}>{expanded ? collapse_btn : expand_btn}</Button>
        </div>
    )
}

export default Period
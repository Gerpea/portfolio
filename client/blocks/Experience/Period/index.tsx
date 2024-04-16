"use client";

import React from 'react'
import DateText from '@/components/DateText'
import Header from '@/components/Header'
import Text from '@/components/Text'
import useToggle from '@/hooks/useToggle'
import Button from '@/components/Button';
import styles from './styles.module.css'

interface Props extends React.HTMLProps<HTMLDivElement> {
    name: string;
    description: string;
    from: Date;
    to: Date;
}

const Period: React.FC<Props> = ({ name, description, from, to, className, ...rest }) => {
    const [expanded, toggleExpand] = useToggle(false);

    return (
        <div className={`${styles.container} ${className}`} {...rest}>
            <div className={styles.header}>
                <Header level='3'>{name}</Header>
                <DateText from={from} to={to} />
            </div>
            <Text className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed}`}>{description}</Text>
            <Button appear='underline' className={styles.button} onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</Button>
        </div>
    )
}

export default Period
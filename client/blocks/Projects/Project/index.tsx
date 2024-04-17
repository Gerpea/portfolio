"use client";

import React, { useCallback, useState } from 'react'
import Markdown from 'react-markdown';
import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from '@/components/Link'
import useToggle from '@/hooks/useToggle'
import styles from './styles.module.css'
import Image from 'next/image';

interface Props extends React.HTMLProps<HTMLDivElement> {
    name: string;
    description: string;
    demoURL?: string;
    codeURL?: string;
    collapse_btn: string;
    expand_btn: string;
}

const Project: React.FC<Props> = ({ name, description, demoURL, codeURL, collapse_btn, expand_btn, ...rest }) => {
    const [expanded, toggleExpand] = useToggle(false);
    const [hover, setHover] = useState(false);
    const handleHover = useCallback(() => setHover(true), [])
    const handleUnHover = useCallback(() => setHover(false), [])

    return (
        <div {...rest}>
            <Header level='3' className={styles.header}>{name}</Header>
            <Markdown
                className={`${styles.text} ${expanded ? styles.textExpanded : styles.textCollapsed} ${hover ? styles.textPreExpand : ''}`}
                components={{
                    img(props) {
                        // @ts-ignore
                        return <Image {...props} width={570} height={570} />
                    }
                }}
            >
                {description}
            </Markdown>
            <div className={styles.footer}>
                {demoURL && <Link href={demoURL}>Demo</Link>}
                {codeURL && <Link href={codeURL}>Code</Link>}
                <Button appear='underline' className={styles.button} onClick={toggleExpand} onMouseEnter={handleHover} onMouseLeave={handleUnHover}>{expanded ? collapse_btn : expand_btn}</Button>
            </div>
        </div >
    )
}

export default Project
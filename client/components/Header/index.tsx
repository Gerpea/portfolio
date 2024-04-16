import React, { useMemo } from 'react'
import styles from './styles.module.css'

type Props = React.HTMLProps<HTMLHeadingElement> & {
    level: '1' | '2' | '3'
}

const levelComponentMap = {
    '1': 'h1',
    '2': 'h2',
    '3': 'h3',
}

const levelStyleMap = {
    '1': styles.levelOne,
    '2': styles.levelTwo,
    '3': styles.levelThree,
}

const Header: React.FC<Props> = ({ children, level, className, ...rest }) => {
    const Component = useMemo(() => levelComponentMap[level], [level]) as keyof JSX.IntrinsicElements

    return (
        // @ts-ignore
        <Component className={`${styles.header} ${levelStyleMap[level]} ${className || ''}`} {...rest}>{children}</Component>
    )
}

export default Header
import React, { PropsWithChildren, useMemo } from 'react'
import styles from './styles.module.css'

type Props =  React.HTMLProps<HTMLHeadingElement> & {
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

const Header: React.FC<PropsWithChildren<Props>> = ({ children, level, ...rest }) => {
    const Component = useMemo(() => levelComponentMap[level], [level]) as keyof JSX.IntrinsicElements

    return (
        <Component className={`${styles.header} ${levelStyleMap[level]}`} {...rest}>{children}</Component>
    )
}

export default Header
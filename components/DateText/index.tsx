import React from 'react'
import styles from './styles.module.css'
import { format } from 'date-fns';

type Props = React.HTMLProps<HTMLSpanElement> & {
    from: Date;
    to: Date;
}

const DateText: React.FC<Props> = ({ from, to, className, ...rest }) => {
    const formatedFrom = format(from, 'MM.yyyy')
    const formatedTo = format(to, 'MM.yyyy')

    return (
        <span className={`${styles.date} ${className || ''}`} {...rest}>{formatedFrom}-{formatedTo}</span>
    )
}

export default DateText
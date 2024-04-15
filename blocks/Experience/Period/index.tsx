import React from 'react'
import DateText from '@/components/DateText'
import Header from '@/components/Header'
import Text from '@/components/Text'
import styles from './styles.module.css'

interface Props extends React.HTMLProps<HTMLDivElement> {
    name: string;
    description: string;
    from: Date;
    to: Date;
}

const Period: React.FC<Props> = ({ name, description, from, to, ...rest }) => {
    return (
        <div {...rest}>
            <div className={styles.header}>
                <Header level='3'>{name}</Header>
                <DateText from={from} to={to} />
            </div>
            <Text>{description}</Text>
        </div>
    )
}

export default Period
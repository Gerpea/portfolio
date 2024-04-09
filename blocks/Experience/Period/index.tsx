import React from 'react'
import DateText from '@/components/DateText'
import Header from '@/components/Header'
import Text from '@/components/Text'
import styles from './styles.module.css'

import { addMonths } from 'date-fns'

const Period: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            <div className={styles.header}>
            <Header level='3'>SberDevices</Header>
            <DateText from={new Date()} to={addMonths(new Date(), 3)} />
            </div>
            <Text>Work here on different projects but mainly on Visper products, do code refactor, feature implementations and others stuff</Text>
        </div>
    )
}

export default Period
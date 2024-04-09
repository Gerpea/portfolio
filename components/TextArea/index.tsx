import React from 'react'
import styles from './styles.module.css'

type Props = React.HTMLProps<HTMLTextAreaElement>

const TextArea = ({name, ...rest}: Props) => {
    return (
        <p className={styles.container}>
            <textarea className={styles.textarea} name={name} {...rest} />
            <label className={styles.label} htmlFor={name}>{name}</label>
        </p>
    )
}

export default TextArea
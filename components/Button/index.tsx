import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'

type Props = React.HTMLProps<HTMLButtonElement> & {
    type: 'fill' | 'underline' | 'icon',
}

const typeStyleMap = {
    'fill': styles.fill,
    'underline': styles.underline,
    'icon': styles.icon,
}

const Button: React.FC<PropsWithChildren<Props>> = ({children, type, ...rest}) => {
  return (
    <button className={`${styles.button} ${typeStyleMap[type]}`} {...rest}>{children}</button>
  )
}

export default Button
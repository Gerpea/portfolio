import React from 'react'
import styles from './styles.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    appear: 'fill' | 'underline' | 'icon',
}

const appearStyleMap = {
    'fill': styles.fill,
    'underline': styles.underline,
    'icon': styles.icon,
}

const Button: React.FC<Props> = ({children, appear, type='button', className, ...rest}) => {
  return (
    <button className={`${styles.button} ${appearStyleMap[appear]} ${className || ''}`} type={type} {...rest}>{children}</button>
  )
}

export default Button
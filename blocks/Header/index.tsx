import React from 'react'
import Icon from '@/components/Icon'
import TextHeader from '@/components/Header'
import Link from '@/components/Link'
import styles from './styles.module.css'

const Header: React.FC<React.HTMLProps<HTMLElement>> = ({className, ...rest}) => {
    return (
        <header className={`${styles.header} ${className || ''}`} {...rest}>
            <div className={styles.buttons}>
                <Link href='https://google.com' className={styles.iconLink}><Icon name="telegram" /></Link>
                <Link href='https://google.com' className={styles.iconLink}><Icon name="mail" /></Link>
                <Link href='https://google.com' className={styles.iconLink}><Icon name="github" /></Link>
                <Link href='#contact' className={styles.contactLink}><span>Contact</span></Link>
            </div>
            <TextHeader level="1" style={{paddingTop: '0.75rem'}}>German Tsyganov</TextHeader>
        </header>
    )
}

export default Header
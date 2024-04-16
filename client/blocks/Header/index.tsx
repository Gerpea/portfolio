import React from 'react'
import Icon from '@/components/Icon'
import TextHeader from '@/components/Header'
import Link from '@/components/Link'
import Logo from '@/components/Logo'
import styles from './styles.module.css'

const Header: React.FC<React.HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
    return (
        <header className={`${styles.header} ${className || ''}`} {...rest}>
            <Logo className={styles.logo} />
            <div className={styles.subHeader}>
                <div className={styles.buttons}>
                    <Link href='https://google.com' className={styles.iconLink}><Icon name="telegram" /></Link>
                    <Link href='https://google.com' className={styles.iconLink}><Icon name="mail" /></Link>
                    <Link href='https://google.com' className={styles.iconLink}><Icon name="github" /></Link>
                    <Link href='#contact' className={styles.contactLink}><span>Contact</span></Link>
                </div>
                <TextHeader level="1" className={styles.title}>German Tsyganov</TextHeader>
            </div>
        </header>
    )
}

export default Header
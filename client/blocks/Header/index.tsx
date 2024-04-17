import React from 'react'
import { getTranslations } from 'next-intl/server'
import Icon from '@/components/Icon'
import TextHeader from '@/components/Header'
import Link from '@/components/Link'
import Logo from '@/components/Logo'
import styles from './styles.module.css'

const Header: React.FC<React.HTMLProps<HTMLElement>> = async ({ className, ...rest }) => {
    const t = await getTranslations('Main')

    return (
        <header className={`${styles.header} ${className || ''}`} {...rest}>
            <Logo className={styles.logo} />
            <div className={styles.subHeader}>
                <div className={styles.buttons}>
                    <Link href='https://t.me/gerpea' target='_blank' className={styles.iconLink}><Icon name="telegram" /></Link>
                    <Link href='mailto: german.tcyganov.fl@gmail.com?subject=Contact From Portfolio' target='_blank' className={styles.iconLink}><Icon name="mail" /></Link>
                    <Link href='https://github.com/Gerpea' target='_blank' className={styles.iconLink}><Icon name="github" /></Link>
                    <Link href='#contact' className={styles.contactLink}><span>{t('contact')}</span></Link>
                </div>
                <TextHeader level="1" className={styles.title}>German Tsyganov</TextHeader>
            </div>
        </header>
    )
}

export default Header
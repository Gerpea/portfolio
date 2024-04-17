"use client";

import React, { useState } from 'react'
import Header from '@/components/Header'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import styles from './styles.module.css'
import submitForm from './submitForm'

type Inputs = {
    contact: string
    message: string
}

interface Props extends React.HTMLProps<HTMLElement> {
    send_btn: string;
    delivered_btn: string;
    reach_hint: string;
    message_hint: string;
    contact: string;
}

const Contact: React.FC<Props> = ({ send_btn, delivered_btn, reach_hint, message_hint, contact, ...rest }) => {
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const handleClick = () => setIsSubmitSuccessful(true);

    return (
        <section {...rest}>
            <Header level='2' className={styles.header}>
                {contact}
            </Header>
            <form action={submitForm} onSubmit={handleClick}>
                <Input placeholder={reach_hint} id='contact' name='contact' disabled={isSubmitSuccessful} className={styles.email} />
                <TextArea placeholder={message_hint} id='message' name='message' disabled={isSubmitSuccessful} className={styles.message} />
                <Button appear='fill' type='submit' disabled={isSubmitSuccessful} className={styles.button}>{
                    isSubmitSuccessful ? delivered_btn : send_btn
                }</Button>
            </form>
        </section>
    )
}

export default Contact
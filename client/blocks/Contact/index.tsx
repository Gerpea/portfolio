"use client";

import React, { useCallback } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Header from '@/components/Header'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import styles from './styles.module.css'
import { sendEmail } from '@/api';

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
    const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
        sendEmail(data.contact, data.message)
    }, [])

    return (
        <section {...rest}>
            <Header level='2' className={styles.header}>
                {contact}
            </Header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder={reach_hint} id='contact' disabled={isSubmitSuccessful} className={styles.email}  {...register("contact")} />
                <TextArea placeholder={message_hint} disabled={isSubmitSuccessful} className={styles.message} {...register("message")} />
                <Button appear='fill' type='submit' disabled={isSubmitSuccessful} className={styles.button}>{
                    isSubmitSuccessful ? delivered_btn : send_btn
                }</Button>
            </form>
        </section>
    )
}

export default Contact
"use client";

import React, { useCallback, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Header from '@/components/Header'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import styles from './styles.module.css'
import Icon from '@/components/Icon';

type Inputs = {
    contact: string
    message: string
}

const Contact: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
    const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
        console.log(data)
    }, [])

    return (
        <section {...props}>
            <Header level='2' className={styles.header}>
                Contact
            </Header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder='How do I reach you?' disabled={isSubmitSuccessful} className={styles.email}  {...register("contact")} />
                <TextArea placeholder="What's your point?" disabled={isSubmitSuccessful} className={styles.message} {...register("message")} />
                <Button appear='fill' type='submit' disabled={isSubmitSuccessful} className={styles.button}>{
                    isSubmitSuccessful ? 'Delivered' : 'Send'
                }</Button>
            </form>
        </section>
    )
}

export default Contact
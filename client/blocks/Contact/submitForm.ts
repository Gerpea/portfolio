'use server';

import nodemailer from "nodemailer"
import sanitizeHtml from 'sanitize-html';

const smtpOptions = {
    service: 'gmail',
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
}

const sendEmail = async (html: string) => {
    const transporter = nodemailer.createTransport({
        ...smtpOptions,
    })

    return await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_FROM_EMAIL,
        subject: 'Contact Form',
        html,
    })
}

export default async function sumbitForm(formData: FormData) {
    const body = {
        contact: formData.get('contact') as string,
        message: formData.get('message') as string,
    }
    sendEmail(`<h2>Contact: ${sanitizeHtml(body.contact)}</h2><h2>Message: ${sanitizeHtml(body.message)}</h2>`)
}
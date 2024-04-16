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

export const sendEmail = async (html: string) => {
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

export async function POST(request: Request) {
    const body = await request.json()
    await sendEmail(`<h2>Contact: ${sanitizeHtml(body.contact)}</h2><h2>Message: ${sanitizeHtml(body.message)}</h2>`)
    return Response.json({ 'ok': 'ok' })
}
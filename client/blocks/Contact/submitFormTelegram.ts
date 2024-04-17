"use server";

import sanitizeHtml from 'sanitize-html';
import TelegramBot from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const bot = new TelegramBot(token, {polling: false});

export default async function sumbitForm(formData: FormData) {
    const body = {
        contact: formData.get('contact') as string,
        message: formData.get('message') as string,
    }
    const message = `*Contact:* ${sanitizeHtml(body.contact)}\n*Message:* ${sanitizeHtml(body.message)}`
    bot.sendMessage(chatId, message, {
        parse_mode: 'Markdown'
    });
}


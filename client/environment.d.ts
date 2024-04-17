namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        BACKEND_URL: string;
        BACKEND_TOKEN: string;
        SMTP_HOST: string;
        SMTP_PORT: string;
        SMTP_USER: string;
        SMTP_PASSWORD: string;
        SMTP_FROM_EMAIL: string;
        TELEGRAM_TOKEN: string;
        TELEGRAM_CHAT_ID: string;
    }
}
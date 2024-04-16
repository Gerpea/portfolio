namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        BACKEND_URL: string;
        BACKEND_TOKEN: string;
    }
}
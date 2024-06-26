import { About, Project, Skill, Work } from "./types";

const BASE_URL = process.env.BACKEND_URL
const TOKEN = process.env.BACKEND_TOKEN

async function baseFetch<T>(endpoint: string): Promise<T> {
    return fetch(`${BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.data.map) {
                return data.data.map((data: any) => ({
                    id: data.id,
                    ...data.attributes
                }))
            } else {
                return ({
                    id: data.data.id,
                    ...data.data.attributes
                })
            }
        });
}

export async function getSkills(): Promise<Skill[]> {
    return baseFetch<Skill[]>('skills?sort=value:desc')
}

export async function getProjects({ locale }: { locale: string }): Promise<Project[]> {
    return baseFetch<Project[]>(`projects?locale=${locale}`)
}

export async function getWorks({ locale }: { locale: string }): Promise<Work[]> {
    return baseFetch<Work[]>(`works?locale=${locale}&sort=from:desc`).then((data) => data.map((work) => ({
        ...work,
        from: new Date(work.from),
        to: new Date(work.to),
    })))
}

export async function getAbout({ locale }: { locale: string }): Promise<About> {
    return baseFetch<About>(`about?locale=${locale}`)
}

export async function sendEmail(contact: string, message: string) {
    return fetch('/api/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact, message })
    }).then(response => response.json()).then(data => data)
}
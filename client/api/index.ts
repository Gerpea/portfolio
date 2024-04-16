import { About, Project, Skill, Work } from "./types";

const BASE_URL = process.env.BACKEND_URL
const TOKEN = process.env.BACKEND_TOKEN

async function baseFetch<T>(endpoint: string): Promise<T> {
    return fetch(`${BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
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
    return baseFetch<Skill[]>('skills')
}

export async function getProjects(): Promise<Project[]> {
    return baseFetch<Project[]>('projects')
}

export async function getWorks(): Promise<Work[]> {
    return baseFetch<Work[]>('works').then((data) => data.map((work) => ({
        ...work,
        from: new Date(work.from),
        to: new Date(work.to),
    })))
}

export async function getAbout(): Promise<About> {
    return baseFetch<About>('about')
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
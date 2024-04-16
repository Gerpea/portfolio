export interface Skill {
    name: string;
    value: number;
}

export interface Project {
    name: string;
    description: string;
    demoURL?: string;
    codeURL?: string;
}

export interface Work {
    name: string;
    description: string;
    from: Date;
    to: Date;
}

export interface About {
    description: string;
}
export interface ITodo {
    icon: EIcons
    iconColor: string
    description: string
}

export enum EIcons {
    calendar = 'calendar',
    file = 'file',
    users = 'users',
}

export type ITodos = ITodo[]

import type { ITodos } from '@/types/todo'

export default {
    getTodos,
    saveTodos
}

export const LOCAL_STORAGE_KEY = 'todos'

async function getTodos(): Promise<ITodos> {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)

    const todos = savedTodos ? JSON.parse(savedTodos) : [
        {
            icon: 'calendar',
            description: 'Parmesan airedale dolcelatte. Bocconcini camembert de normandie cheese and wine when the cheese comes out everybody\'s happy fondue'
        },
        {
            icon: 'file',
            description: 'Parmesan airedale dolcelatte. Bocconcini camembert de normandie cheese and wine when the cheese comes out everybody\'s happy fondue lancashire feta rubber cheese. Cheese strings jarlsberg feta cut the cheese manchego cheddar babybel pepper jack. Stilton dolcelatte danish fontina cauliflower cheese.'
        },
        {
            icon: 'users',
            description: 'Parmesan airedale dolcelatte.'
        },
    ]

    return new Promise(resolve => setTimeout(() => resolve(todos), 100))
}

async function saveTodos(todos: ITodos): Promise<void> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

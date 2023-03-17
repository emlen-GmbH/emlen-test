import type { ITodos } from '@/types/todo'

export default {
    getTodos,
    setTodos
}

export const LOCAL_STORAGE_KEY = 'todos'

function getTodos(): ITodos {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)

    return savedTodos ? JSON.parse(savedTodos) : [{
        icon: 'calendar-app',
        description: 'Parmesan airedale dolcelatte. Bocconcini camembert de normandie cheese and wine when the cheese comes out everybody\'s happy fondue lancashire feta rubber cheese. Cheese strings jarlsberg feta cut the cheese manchego cheddar babybel pepper jack. Stilton dolcelatte danish fontina cauliflower cheese.'
    }]
}

function setTodos(todos: ITodos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

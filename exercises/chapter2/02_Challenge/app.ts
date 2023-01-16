interface Todo {
    id: number
    title: string
    status: statusEnum
    completedOn?: Date
}
enum statusEnum{
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo",
}
const todoItems: Todo [] = [
    { id: 1, title: "Learn HTML", status: statusEnum.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: statusEnum.InProgress },
    { id: 3, title: "Write the best app in the world", status: statusEnum.Todo },
]

function addTodoItem(todo: string): Todo{
    const id = getNextId (todoItems)
    const newTodo = {
        id,
        title: todo,
        status: statusEnum.Todo,
    }
    todoItems.push(newTodo)
    return newTodo
}

function getNextId <T extends {id:number}> (items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
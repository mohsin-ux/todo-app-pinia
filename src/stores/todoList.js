import {defineStore} from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({item, id: this.id++, completed: false})
            localStorage.setItem('todos', JSON.stringify(this.todoList))
            console.log(JSON.parse(localStorage.getItem('todos')))
            console.log(this.todoList)
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter(object => object.id !== itemId)
            // localStorage.removeItem(this.todoList)
            localStorage.setItem('todos', JSON.stringify(this.todoList))

        },
        toggleCompleted(idTofind) {
            const todo = this.todoList.find((obj) => obj.id === idTofind)
            if(todo) {
                todo.completed = !todo.completed
            }
        },
        loadTodos() {
            const todoItem = JSON.parse(localStorage.getItem('todos'))
            if (todoItem) {
                this.todoList = todoItem
                this.id = todoItem.length ? todoItem[todoItem.length - 1].id + 1 : 0
            }
        }
    }
})
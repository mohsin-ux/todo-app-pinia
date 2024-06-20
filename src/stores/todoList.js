import {defineStore} from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo(item) {
            console.log('addtoitems')
            this.todoList.push({item, id: this.id++, completed: false})
            console.log(this.todoList)
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter(object => object.id !== itemId)
        },
        toggleCompleted(idTofind) {
            const todo = this.todoList.find((obj) => obj.id === idTofind)
            if(todo) {
                todo.completed = !todo.completed
            }
        }
    }
})
<script setup>
import {useTodoListStore} from '../stores/todoList'
import {storeToRefs} from 'pinia'
import {onMounted, ref} from 'vue'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)

const todos =  ref([])
const todoItem = JSON.parse(localStorage.getItem('todos'))


onMounted(() => {
    store.loadTodos()
})


// console.log(`todos ${todos[0]}`)




const {toggleCompleted, deleteTodo} = store

// const todos = ref(localStorage.getItem())

</script>
<template>
    <div v-for="todo in todoList" :key="todo.id" class="item">
        <div class="content">
            <span :class="{completed: todo.completed}">{{ todo.item }}</span>
            <div>
                <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
                <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.completed{
    text-decoration: line-through;
}
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}     

</style>

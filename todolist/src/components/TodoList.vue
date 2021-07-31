<template>
    <div v-if="todos.length">
        <todo-item
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        ></todo-item>
    </div>
    <b-alert v-else show variant="light">
        No hay todos
    </b-alert>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components:{ 
        TodoItem
    },
    props:{ 
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>
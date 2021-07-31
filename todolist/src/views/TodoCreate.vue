<template>
    <div>
        <h1>Componente create todo</h1>
        <todo-form :todo="todo" @submitForm="addTodo"></todo-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import TodoForm from '@/components/TodoForm'

export default {
    name: 'TodoCreate',
    components:{
        TodoForm
    },
    data(){
        return {
            todo: {
                id: null,
                text: '',
                done: false
            }
        }
    },
    methods: {
        ...mapActions({
            createTodo: 'todos/addTodos'
        }),
        addTodo(todo){
            this.createTodo(todo).then(() => {
                this.$router.push('/todos')
            })
        }
    }
}
</script>
<template>
    <div v-if="selectedTodo">
        <todo-form :todo="selectedTodo"
            @submitForm="updateTodo"
            submitText="Actulizar todo"
        ></todo-form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import TodoForm from '@/components/TodoForm'

export default {
    name: 'TodoUpdate',
    components: {
        TodoForm
    },
    computed: {
        ...mapState('todos', ['selectedTodo'])
    },
    methods: {
        ...mapActions({
            _updateTodo: 'todos/updateTodo'
        }),
        updateTodo(todo){
            this._updateTodo(todo).then(() => {
                this.$router.push({ name: 'todos' })
            })
        }
    }
}
</script>
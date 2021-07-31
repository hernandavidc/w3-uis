<template>
    <b-row class="mb-2">
        <b-col cols="4"> {{ todo.text }} </b-col>
        <b-col cols="2"> {{ todo.done }} </b-col>
        <b-col>
            <b-button variant="primary"
                @click="goToUpdateTodo"
            >
                Editar
            </b-button>
            <b-button variant="warning"
                @click="updateStatusTodo"
            >
                Estado
            </b-button>
            <b-button variant="danger"
                @click="deleteTodo"
            >
                Eliminar
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
    name: 'TodoItem',
    props:{
        todo: {
            type: Object,
            required: true
        }
    },
    methods:{
        ...mapActions({
            _updateStatusTodo: 'todos/updateStatusTodo',
            _removeTodo: 'todos/deleteTodo'
        }),
        ...mapMutations('todos', ['setTodo']),
        goToUpdateTodo(){
            this.setTodo(this.todo)
            this.$router.push({
                name: 'todos-update',
                params: { id: this.todo.id }
            })
        },
        updateStatusTodo(){
            this._updateStatusTodo(this.todo)
        },
        deleteTodo(){
            this._removeTodo(this.todo)
        }
    }
}
</script>
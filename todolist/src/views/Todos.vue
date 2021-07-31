<template>
    <div class="mt-5">
        <b-row>
            <b-col cols="6">
                <h2>Todos pendientes</h2>
                <todo-list :todos="pending"></todo-list>
            </b-col>
            <b-col cols="6">
                <h2>Todos listos</h2>
                <todo-list :todos="done"></todo-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TodoList from '@/components/TodoList'

export default {
    name: 'Todos',
    components:{
        TodoList
    },
    computed:{
        ...mapGetters('todos', ['pending', 'done'])
    },
    mounted(){
        this.fetchTodos()
    },
    methods:{
        ...mapActions('todos', ['fetchTodos'])
    }
}
</script>
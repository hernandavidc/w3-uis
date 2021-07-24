<template>
<div>
    <h1 class="text-center">
        Compt contador
    </h1>
    <button @click="increment(1)" class="btn btn-success btn-block">
        Incrementar
    </button>
    <div class="alert alert-primary text-center mt-3">
        {{ counter }}
    </div>
    <button @click="decrement(1)" class="btn btn-danger btn-block">
        Decrementar
    </button>
</div>
</template>

<script>
import { mapState, mapMutations, } from 'vuex'
export default {
    name: 'Counter',
    computed:{
        ...mapState(['counter']),
    },
    created(){
        console.log(this);
    },
    methods: {
        ...mapMutations(['increment', 'decrement']),
    }
}
</script>
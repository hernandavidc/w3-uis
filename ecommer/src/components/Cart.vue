<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <template #cell(actions)="row">
                <b-button variant="danger" @click="removeItem(row)">
                    Eliminar
                </b-button>
            </template>
        </b-table>
        <b-alert variant="success" show>Costo total: Cop. $ {{ totalCost }}</b-alert>
    </div>
    <b-alert v-else variant="info" show>No hay productos en tu carrito</b-alert>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Cart',
    data(){
        return {
            fields: ['name', 'qty', 'price', 'actions'],
        }
    },
    computed: {
        ...mapState('cart', ['cart']),
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart', ['removeProductFromCart']),
        removeItem(row){
            console.log(row);
            this.removeProductFromCart(row.item);
        }
    }
}
</script>
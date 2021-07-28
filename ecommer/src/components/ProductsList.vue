<template>
<div v-if="products.length">
    <paginate
        name="products"
        :list="products"
        :per="perPage"
    >
        <b-card-group columns>
            <product-item 
                v-for="item in paginated('products')" 
                :key="item.id"
                :product="item"
                @addToCart="addProductToCart"
            > </product-item>
        </b-card-group>
    </paginate>
    <paginate-links for="products"
        :classes="{
            'ul': 'pagination',
            'li': 'page-item',
            'li > a': 'page-link'
        }"
    ></paginate-links>
</div>
<b-alert v-else variant="info" show>No hay productos disponibles</b-alert>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import ProductItem from '@/components/ProductItem'

export default {
    name: 'ProductsList',
    components: {
        ProductItem
    },
    data(){
        return {
            paginate: ['products'],
            perPage: 9,
        }
    },
    mounted(){
        this.fetchProducts();
    },
    computed: {
        ...mapState('products', ['products'])
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
        ...mapMutations('cart', ['addProduct']),
        addProductToCart(product){
            this.addProduct(product);
        }
    }
}
</script>
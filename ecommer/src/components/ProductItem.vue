<template>
    <b-card :title="product.name"
        :img-src="product.img"
        :img-alt="product.name"
        img-top
        class="mb-2"
    >
        <p class="muted"> COL $. {{ product.price }} </p>
        <b-button block 
            variant="danger"
            @click="$emit('addToCart', product)"
        >Agregar al carrito</b-button>
    </b-card>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
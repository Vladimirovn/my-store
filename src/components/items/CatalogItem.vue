<template>
    <v-card
      class="mx-auto"
      width="344"
    >
        <v-img
            :src="product.images[0]"
            height="300px"
            cover
            alt="Product Img"
        ></v-img>
    
        <v-card-title>
            {{ product.title }}
        </v-card-title>
    
        <v-card-subtitle>
            Price: {{ product.price }}$
        </v-card-subtitle>
    
        <v-card-actions>
            <v-btn
                color="orange-lighten-2"
                variant="text"
                @click="toCart()"
            >
                {{ btnText }}
            </v-btn>
    
            <v-spacer></v-spacer>
    
        </v-card-actions>
    </v-card>
  </template>

<script setup>
    import { useProductStore } from '@/stores/ProductStore';
    import { ref } from 'vue';

    const store = useProductStore()
    
    const props = defineProps({
        product: {
            type: Object,
        }
    })

    const btnText = ref('Add to cart')

    function toCart(){
        store.addToCart(props.product.id)
        btnText.value = 'in cart'
    }

</script>

<style lang="scss" scoped>
    .product {
        height: 40em;
        width: 100%;
        border: 1px solid;
    }
</style>
<template>
    <div>
        <div class="d-flex justify-space-between align-baseline px-2">
            <h1>Cart Page</h1>
            <v-btn
                size="small"
                @click="router.push({name:'catalog'})"
            >
                back to Catalog >
            </v-btn>
        </div>
        
        <v-card
            class="mx-auto mt-2"
            max-width="700"
        >
            <v-container>
                <v-row dense>
                    <p v-if="!store.cartProducts.length" class="ms-4">Cart is empty...</p>
                    <CartItem v-for="cartProduct of store.cartProducts"
                        :key="cartProduct.id"
                        :cartProduct="cartProduct"
                        @delete="store.deleteCartItem"
                    />
                </v-row>
            </v-container>
            <v-catd-actions>
                <v-btn
                    class="ms-4 mb-3"
                    @click="router.push({name:'order'})"
                >
                    to orders
                </v-btn>
            </v-catd-actions>
        </v-card>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { useProductStore } from '@/stores/ProductStore';

    import CartItem from '@/components/items/CartItem.vue';
    
    const router = useRouter()
    const store = useProductStore()



</script>

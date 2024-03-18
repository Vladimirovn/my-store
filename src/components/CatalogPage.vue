<template>
    <div>
        <div class="d-flex justify-space-between align-baseline px-2">
            <h1>Catalog Page</h1>
            <div class="cart-button">
                <v-btn icon @click="router.push({name:'cart'})">
                    <v-icon>
                        <img src="@/assets/basket.svg" alt="basket">
                    </v-icon>
                </v-btn>
            </div>
        </div>
        <div class="product-list mt-2">
            <CatalogItem v-for="product of store.products"
            :key="product.id"
            :product="product"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'

    import { useProductStore } from '@/stores/ProductStore';
    import CatalogItem from '@/components/items/CatalogItem.vue'

    const store = useProductStore()
    const router = useRouter()
  
</script>

<style lang="scss" scoped>
    .product-list {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        gap: 20px;
        justify-content: center;
    }

    .cart-modal {
        max-width: 500px;
    }
</style>
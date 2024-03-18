import { defineStore } from "pinia";
import { ref } from "vue";

import { Product } from "@/types/Interfaces";

export const useProductStore = defineStore('productStore', () => {
    const products = ref<Product[]>([])

    const cartProducts = ref<Product[]>([])

    async function getProducts() {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        try {
            const data = await response.json()
            products.value = data
        } catch (error) {
            console.log('Error: ' + error);
        }
    }
    getProducts()

    function addToCart(id:number){
        cartProducts.value.push(products.value[products.value.findIndex(el => el.id === id)])
        console.log(cartProducts.value);
    }

    function deleteCartItem(id:number){
        cartProducts.value.splice(cartProducts.value.findIndex(el => el.id === id), 1)
    }

    return {
        products,
        cartProducts,
        addToCart,
        deleteCartItem,
    }
})
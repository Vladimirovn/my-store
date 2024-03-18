import { defineStore } from "pinia";
import { ref } from "vue";

import { Order } from "@/types/Interfaces";

export const useOrderStore = defineStore('orderStore', () => {
    const orders = ref<Order[]>([])

    return {
        orders,
    }
})
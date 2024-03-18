import { defineStore } from "pinia";
import { ref } from "vue";

import { User } from "@/types/Interfaces";

export const useUserStore = defineStore('userStore', () => {
    const balance = ref<number>(0)
    const userInfo = ref<User>({
        id: 0,
        name: "",
        avatar: "",
        email: "",
        password: "",
        role: ""
    })

    async function getUser(id:number) {
        const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
        try {
            const data = await response.json()
            userInfo.value = data
        } catch(error) {
            console.log('Error: ' + error);
        }
    }

    return {
        balance,
        userInfo,
        getUser,
    }
})
<template>
    <header class="header d-flex justify-space-between px-2">
        <h3 class="header-name">My:Store</h3>
        <div class="ma-2 header-navigation">
            <v-btn 
                size="small" 
                class="me-2"
                @click="router.push({name: 'main'})"
                >
                Home
            </v-btn>
            <v-btn 
                size="small"
                class="me-2"
                @click="router.push({name: 'catalog'})"
                >
                Catalog
            </v-btn>
            <v-btn 
                size="small"
                @click="router.push({name: 'order'})"
                >
                Orders
            </v-btn>
        </div>
        <div v-if="store.userInfo.name" class="header-userBar d-flex">
            <div class="header-userBar-info me-2">
                <h4>{{ store.userInfo.name }}</h4>
                <h5>Balance: {{ store.balance }} $</h5>
            </div>
            <v-avatar>
                <v-img
                    :alt="store.userInfo.name"
                    :src="store.userInfo.avatar"
                ></v-img>
            </v-avatar>
        </div>
    </header>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { useUserStore } from '@/stores/UserSrore';

    const router = useRouter()
    const store = useUserStore()
</script>

<style lang="scss" scoped>
    .header{
        height: 50px;
        background: #fff;
        border-bottom: 1px solid;
        align-items: center;
    }
</style>
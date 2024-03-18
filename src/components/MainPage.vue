<template>
    <div class="px-2">
        <h1>Main Page</h1>
        <v-col v-if="!user.name" cols="auto">
            <v-card
                class="mx-auto"
                max-width="444"
                title="Enter your id to logIn"
            >
                <v-col
                    class="d-flex"
                    cols="12"
                >
                    <v-text-field
                        v-model="userId"
                        type="number"
                        density="compact"
                        label="Enter your id"
                        variant="outlined"
                        min="1"
                    >
                    </v-text-field>
                </v-col>
                <v-btn 
                    class="ms-3 mb-3"
                    size="small"
                    @click="store.getUser(userId||0)"
                >
                Login
                </v-btn>
            </v-card>
        </v-col>
        <v-col v-else cols="auto">
            <v-card
                :append-avatar="store.userInfo.avatar"
                class="mx-auto"
                max-width="444"
                :subtitle="'Balance: ' +  store.balance"
                :title="store.userInfo.name"
            >
                <v-col
                    class="d-flex"
                    cols="12"
                >
                    <v-text-field
                        v-model="funds"
                        type="number"
                        density="compact"
                        label="Add funds to you balance"
                        variant="outlined"
                    >
                    </v-text-field>
                    <v-btn
                        class="ms-2"
                        @click="addBalance()"
                    >
                        Add
                    </v-btn>
                </v-col>
            </v-card>
        </v-col>
    </div>
</template>

<script setup lang="ts">

    import { ref, computed } from 'vue'
    import { useUserStore } from '@/stores/UserSrore';

    const store = useUserStore()
    const funds = ref<number>()
    const userId = ref<number>()

    const user = computed(() => store.userInfo)

    function addBalance() {
        funds.value ? store.balance += +funds.value: ''
        funds.value = undefined
    }

</script>
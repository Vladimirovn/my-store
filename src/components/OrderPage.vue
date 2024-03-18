<template>
    <div class="mx-2">
        <div class="d-flex justify-space-between align-baseline px-2">
            <h1>Order Page</h1>
            <v-btn
                size="small"
                @click="router.push({name: 'cart'})"
            >
                back to Cart >
            </v-btn>
        </div>
        <div class="order-form">
            <v-card
                class="mx-auto mt-2"
                max-width="700"
            >
                <v-card-title>Order Form</v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="name" 
                        label="Name"
                        density="compact"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field 
                        v-model="address" 
                        label="Address"
                        density="compact"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field 
                        v-model="email" 
                        label="Email"
                        density="compact"
                        variant="outlined"
                    ></v-text-field>
                </v-card-text>

                <v-table v-if="productStore.cartProducts.length" class="mx-4">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Price
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="product in productStore.cartProducts"
                            :key="product.id"
                        >
                            <td>{{ product.title }}</td>
                            <td>{{ product.price }} $</td>
                            <td>
                                <v-btn 
                                    size="small"
                                    @click="productStore.deleteCartItem(product.id)"
                                >
                                    delete
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>

                <v-card-actions class="d-flex justify-space-between align-baseline mx-3">
                    <v-btn 
                        @click="createOrder()" 
                        color="orange-lighten-2"
                        variant="text"
                    >
                        Submit
                    </v-btn>
                    <p>Total price: {{ calculateTotalPrice() }} $</p>
                </v-card-actions>
            </v-card>
        </div>
        <div class="orders mt-6">
            <v-table v-if="orderStore.orders.length" class="mx-4">
                <thead>
                    <tr>
                        <th class="text-left">
                            Order ID
                        </th>
                        <th class="text-left">
                            Order Date
                        </th>
                        <th class="text-left">
                            Price
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="order in orderStore.orders"
                        :key="order.id"
                    >
                        <td>{{ order.id }}</td>
                        <td>{{ order.date }}</td>
                        <td>{{ order.price }} $</td>
                        <td>
                            <v-btn 
                                size="small"
                                @click="deleteOrder(order.id)"
                            >
                                delete
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useProductStore } from '@/stores/ProductStore';
    import { useUserStore } from '@/stores/UserSrore';
    import { useOrderStore } from '@/stores/OrderStore'

    const productStore = useProductStore()
    const userStore = useUserStore()
    const orderStore = useOrderStore()

    const router = useRouter()

    const name = ref<string>('')
    const address = ref<string>('')
    const email = ref<string>('')
    const tPrice = ref<number>(0)

    function addUserToForm() {
        if(userStore.userInfo.name){
            name.value = userStore.userInfo.name
            email.value = userStore.userInfo.email
        }
    }
    addUserToForm()

    function calculateTotalPrice() {
        let totalPrice = 0;
        productStore.cartProducts.forEach((item: { price: number; }) => {
            totalPrice += item.price;
        });
        tPrice.value = totalPrice
        return totalPrice;
    }

    function createOrder(){
        if(productStore.cartProducts.length && tPrice.value < userStore.balance){
            orderStore.orders.push({
                id: Math.floor(1000 + Math.random() * 9000),
                date: new Date().toLocaleString(),
                price: tPrice.value
            })
            productStore.cartProducts.length = 0
            userStore.balance -= tPrice.value
        }
    }

    function deleteOrder(id: number){
        let item:number = orderStore.orders.findIndex((el: { id: number; }) => el.id === id)
        userStore.balance += orderStore.orders[item].price
        orderStore.orders.splice(item, 1)
    }

</script>
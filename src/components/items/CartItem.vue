<template>
    <v-col cols="12">
        <v-card>   
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="text-h5">
                        {{ cartProduct?.title }}
                    </v-card-title>

                    <v-card-subtitle>
                        Price: {{ cartProduct?.price }}$
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn
                            class="ms-2"
                            size="small"
                            variant="outlined"
                            @click="$emit('delete', cartProduct?.id)"
                        >
                            delete item
                        </v-btn>
                    </v-card-actions>
                </div>

                <v-avatar
                    class="ma-3"
                    rounded="0"
                    size="125"
                >
                    <v-img :src="cartProduct?.images[0]"></v-img>
                </v-avatar>
            </div>
        </v-card>
    </v-col>
</template>

<script setup lang="ts">

    const props = defineProps({
        cartProduct: {
            type: Object,
        }
    })

</script>
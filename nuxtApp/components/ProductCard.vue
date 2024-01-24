

<template>
<div class="card text-center m-4">
    <img :src="product.image" alt="product thumb" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate" >{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
    <button class="btn">View Details</button>
    </NuxtLink>
</div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style>
.thumb{
    max-height: 140px;
    max-width: 70%;
    margin: 0 auto;
}

.btn{
    width: 80%;
    border: 1px solid rgb(90, 158, 137);
    padding: 0.6rem;
    border-radius: 0.5rem;
    background-color: rgb(73, 150, 125);
    color: white;
    font-weight: bold;
}
</style>
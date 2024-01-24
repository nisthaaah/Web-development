
<template>
<div class="card">
    <div class="img">
        <img :src="product.image" >
    </div>

    <div class="details">
        <h2>{{ product.title }}</h2>
        <p>Price- ${{ product.price }}</p>
        <h3>Product description: </h3>
        <hr>
        <p>{{ product.description }}</p>
    </div>

</div>


</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style>
.img{
    margin-top: 2rem;
    margin-left: 3rem;
    max-height: 120px;
    max-width: 15%;
}

.details{
    margin-top: 13%;
    padding: 1rem;
}

.details h2{
    font-weight: bold;
    font-size: 2rem;
}

hr{
    border: 0.1px solid #dadada;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    
}

p{
    font-style: italic;
    margin-bottom: 2rem;
}

.img:hover{
    max-height: 150px;
    max-width: 17%;
}
</style>
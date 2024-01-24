<template>
    <div>
        <header class="shadow sm bg-white">
            <nav class="container p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold m-0">Nuxt App</NuxtLink>
                <ul class="flex gap-5">
                    <li><NuxtLink class="link" to="/">Home</NuxtLink></li>
                    <li><NuxtLink class="link" to="/about">About</NuxtLink></li>
                    <li><NuxtLink class="link" to="/products/">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>


<style scoped>
.link{
    color: rgb(60, 143, 115);
}



</style>
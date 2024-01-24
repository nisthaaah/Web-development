<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/" class="font-bold">Nuxt App</NuxtLink>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li>
                <NuxtLink class="link" to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink class="link" to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink class="link" to="/products/">Products</NuxtLink>
            </li>
        </ul>
    </footer>
</template>


<style scoped>.link {
    color: rgb(73, 150, 125);
}

</style>
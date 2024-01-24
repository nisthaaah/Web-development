<template>
    <div class="error">
        <p>{{ error.statusCode }}</p>
        <p>Oops.</p>
        <p>{{ error.message }}</p>


    </div>
</template>

<script setup>
const { error } = defineProps(['error'])

</script>
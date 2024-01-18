<template>
<h1>Login</h1>
<div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="logIn">Login</button>
        
    </div>
</template>

<script>
export default{
    name: 'LoginPage'
}
</script>

<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a @click="logOut" href="#">Log Out</a>
</div>
</template>

<script>
export default{
    name: 'HeaderPage',
    methods:{
        logOut(){
            localStorage.clear();
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>

<style>
.nav{
    background-color: black;
    overflow: hidden;
    
}

.nav a{
    padding: 14px;
    float: left;
    text-decoration: none;
    color: whitesmoke;
    margin-right: 5px;
}

.nav a:hover{
    color: cornsilk;
}
</style>
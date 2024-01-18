<template>
  <router-view />

</template>

<script>

export default {
  name: 'App',
  // components: {
  //   SignUp,

  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.signup input, .login input{
    width: 300px;
    height: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 5px;
    border-width: 2px;
}

.signup button, .login button{
    background-color: black;
    color: white;
    padding: 6px 130px;
    border-radius: 8px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
 </style>

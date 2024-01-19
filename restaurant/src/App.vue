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
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.signup input, .login input, .add input{
    width: 300px;
    height: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 5px;
    border-width: 2px;
}

.signup button, .login button, .add button{
    background-color: black;
    color: white;
    padding: 8px 130px;
    border-radius: 8px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}
 </style>

<template>
  <nav class="navbar navbar-dark bg-success navbar -expand-sm"></nav>
  <img alt="Vue logo" src="./assets/logo.png">
  <nav class="na"></nav>
  <div>
    {{ counter }}
  </div>

  <div class="buttons">
    <button @click="decreaseCount">-</button>
    <button @click="increaseCount">+</button>
  </div>

  <childApp msg = 'heyyy' />
</template>

<script>
import childApp from './New.vue';
export default {
  name: 'App',
  data(){
    return{
      counter: 0,
    }
  },

  components: {
    childApp
  },
  methods: {
    increaseCount(){
      this.counter++;
    },

    decreaseCount(){
      this.counter--;
    }
  }
  
}
</script>

<style>
div{
  font-size: 40px;
}
.buttons button{
  width: 50px;
  margin: 10px;
  color: white;
  background-color: black;
  border-radius: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

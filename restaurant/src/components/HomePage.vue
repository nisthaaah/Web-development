<template>
    <HeaderPage />

    <h1>Hello {{ name }}, welcome to the home page!!</h1>
    <table class="table">
        <tr class="heading">
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key ="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
            <router-link :to="'/update/'+item.id" class="routerLink">Update</router-link>
            <i class="fas fa-times" @click="deleteRestaurant(item.id)"></i>
        </td>
    </tr>
</table>
</template>



<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    methods:{
        async deleteRestaurant(id){
            let res = await axios.delete('http://localhost:3001/restaurant/'+id);
            if(res.status == 200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            let res = await axios.get('http://localhost:3001/restaurant');
            this.restaurant = res.data;
        }
    },
    components: {
        HeaderPage
    },
        mounted() {
            this.loadData()
        },
}
</script>

<style>
.table{
width: 100%;
}
.table td{
  border: 1px solid;
  padding: 15px;
  width: 100px;
}

.table td i{
    padding: 0 10px;
    color: red;
    font-size: 20px;
}

.routerLink{
    text-decoration: none;
    color: rgb(55, 55, 55);
}

.heading td{
    font-weight: bold;
}
</style>
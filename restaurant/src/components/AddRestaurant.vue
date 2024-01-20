<template>
    <HeaderPage />

    <h1>Hello {{ name }}, welcome to the Add Restaurant page!!</h1>
    <form action="" class="add">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
        <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
        <button type="button" @click="addRestaurant">Add new Restaurant</button>

    </form>
</template>
    
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'AddRestaurant',
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            },
            name: '',

        }
    },
    methods: {
        async addRestaurant() {
            let res = await axios.post("http://localhost:3001/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,

            });
            if(res.status == 201){
                this.$router.push({ name: 'HomePage' })
            }
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    },

    components: {
        HeaderPage
    }
}
</script>
<template>
    <HeaderPage />

    <h1>Hello {{ name }}, welcome to the Update Restaurant page!!</h1>
    <form action="" class="add">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
        <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
        <button type="button" @click="updateRestaurant">Update the Restaurant</button>

    </form>
</template>
    
    
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'UpdateRestaurant',
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
        async mounted() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }

            const res = await axios.get('http://localhost:3001/restaurant/'+this.$route.params.id);
            this.restaurant = res.data
            console.warn(res.data)

        },
        methods:{
            async updateRestaurant(){
                let res = await axios.put('http://localhost:3001/restaurant/'+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,

            });
            if(res.status == 200){
                this.$router.push({ name: 'HomePage' })
            }

            }
        },
    components: {
        HeaderPage
    }
}
</script>
<template>
<h1>Login</h1>
<div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="logIn">Login</button>
        
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'LoginPage',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async logIn(){
            let res = await axios.get(`http://localhost:3001/users?email=${this.email}&password=${this.password}`)
            if (res.status == 200 && res.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(res.data[0]));
                this.$router.push({ name: "HomePage" });
            }
            else{
                alert("Sorry!! Account does not exists.")
            }
        },
        mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "HomePage" });
        }
    },
    }
}
</script>

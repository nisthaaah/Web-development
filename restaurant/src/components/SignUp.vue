<template>
    <h1>Sign Up</h1>
    <div class="signup">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">SignUp</button>
        <button @click="logIn">Login</button>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async signUp() {
            let res = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password,
            });

            if (res.status == 201) {
                this.$router.push({ name: "HomePage" });
            }
        },
        logIn() {
            this.$router.push({ name: "LoginPage" });
        },
    },

    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "HomePage" });
        }
    },
};
</script>

<style>
.signup input {
    width: 300px;
    height: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 5px;
    border-width: 2px;
}

.signup button {
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

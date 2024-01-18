<template>
    <h1>Hello user, welcome to the home page!!</h1>
</template>

<script>
export default{
    name: 'HomePage',
    methods:{
        mounted(){
                let user = localStorage.getItem('user-info');
                if(!user){
                    this.$router.push({name: 'SignUp'})
                }
            }
    }
}
</script>
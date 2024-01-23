<template>
    <div id="app">
        <div class="search">
            <div class="searchbar">
                <input v-model="city" @keydown.enter="handleKey" type="text" class="search-bar" placeholder="Enter location">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
            </div>
            

            <div class="weather">
                <div class="location-box">
                    <div class="location"> {{ city }}</div>
                    <div class="date">{{ date }}</div>
                </div>

                <div class="weather-box">
                    <div class="temp">{{ temp }}&deg; <img :src="icon" alt=""></div>
                    <div class="weather">{{ weather }} </div>
                    <div class="description">{{ description }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'WeatherApp',
    data() {
        return {
            title: 'Weather App',
            city: '',
            date: '',
            temp: '',
            weather: '',
            description: '',
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            icon: '',

        }
    },
    methods:{
        async fetchData(){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=89e8ea5a737738d8849c26341a17ed1e`);
        const data = await response.data;
        this.city = data.name;
        const d = new Date();
        this.date = d.getDate() + '-' +this.months[d.getMonth()] + '-' + d.getFullYear();
        this.temp = Math.round(data.main.temp);
        this.weather = data.weather[0].main;
        this.description = data.weather[0].description;
        this.icon = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;


        console.log(data);
        },
        handleKey(e){
            if(e.key === 'Enter'){
                this.fetchData();
            }
        }
    },
    
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.search {
    position: relative;
    border: 1px solid black;
    min-height: 70vh;
    min-width: 55vh;
    padding: 2rem;
    border: 0.09rem solid rgb(169, 159, 144);
    border-radius: 0.5rem;
    background-color: antiquewhite;
}

.search-bar {
    display: flex;
    width: 100%;
    padding: 0.81rem 4rem;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    color: rgb(165, 165, 165);
    border: none;
    background: none;
    outline: none;
    background-color: rgb(255, 255, 255, 0.5);
    margin-bottom: 2rem;
}

.search-bar:focus {
    background-color: rgb(255, 255, 255, 0.75);
    border-radius: 5px 0 5px 0;
}

.location-box .location{
     font-family: 'Times New Roman', Times, serif;
     font-size: 3rem;
}

.location-box .date{
    font-style: italic;
    font-size: smaller;
    margin-bottom: 3rem;
}

.weather-box .temp{
    font-size: 5rem;
    border: 0.09rem solid rgb(124, 124, 124);
    border-radius: 2rem;
    margin-bottom: 1.5rem;
}

.weather-box .weather{
    font-size: 2rem;
}

.weather-box .description{
    font-size: 1rem;
    font-style: italic;
}


</style>
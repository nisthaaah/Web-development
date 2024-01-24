<template>
    <div id="app">
        <div class="search" :class="{
            hot: typeof weather.main !== 'undefined' && weather.main.temp > 16,
            cold: typeof weather.main !== 'undefined' && weather.main.temp <= 16
        }">
            <div class="searchbar">
                <input v-model="city" @keydown.enter="handleKey" type="text" class="search-bar"
                    placeholder="Enter location">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
            </div>


            <div class="weather" v-show="showWeather">
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
            showWeather: false,

        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=89e8ea5a737738d8849c26341a17ed1e`);
                const data = await response.data;
                this.city = data.name;
                const d = new Date();
                this.date = d.getDate() + '-' + this.months[d.getMonth()] + '-' + d.getFullYear();
                this.temp = Math.round(data.main.temp);
                this.weather = data.weather[0].main;
                this.description = data.weather[0].description;
                this.icon = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
                this.showWeather = true
            }

            catch (error) {
                console.error("Error fetching data: ", error);
                this.showWeather = false;
            }
        },

        handleKey(e) {
            if (e.key === 'Enter') {
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
    background-color: #212730;
}

.search {
    border: none;
    background: none;
    outline: none;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.25);
    min-height: 70vh;
    min-width: 55vh;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    background-image: url('@/assets/cold.jpeg');
    /* background-image: url('C:\Web development\weatherapp\src\assets\cold.jpeg'); */

}

.search-bar {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 0.81rem 4rem;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    color: #212730;
    border: none;
    background: none;
    outline: none;
    background-color: whitesmoke;
    margin: 0 auto; /* Center horizontally */
    margin-bottom: 2rem;
    text-align: center;
}

.search.cold {
    background-image: url('@/assets/cold.jpeg');
}

.search.hot {
    background-image: url('@/assets/hot.jpeg');
}

.search-bar:focus {
    background-color: white;
    border-radius: 5px 0 5px 0;
    color: black;
    width: 100%;
}

.location-box .location {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3.5rem;
    color: white;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
    font-weight: bold;
}

.location-box .date {
    font-style: italic;
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 3rem;
    color: whitesmoke;

}

.weather-box .temp {
    font-size: 5rem;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.25);
    border-radius: 2rem;
    margin-bottom: 1.5rem;
}

.weather-box .weather {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: whitesmoke;
}

.weather-box .description {
    font-size: 1rem;
    font-style: italic;
    color: whitesmoke;
}
</style>
<template>
  <div id="app">
    <main>
      <div class="search-div">
        <input type="text" class="search-location" placeholder="Search..." v-model="search_query" @keypress.enter="fetchWeather">
        <button class="search-btn" @click="fetchWeather">Go</button>
      </div>
      <div class="location-div">
        <div class="location">{{ weather.city }}, {{ weather.country }}</div>
        <div class="date">{{ weather.date }}</div>
      </div>
      <div class="weather-div">
        <div class="temp">{{ weather.temp }}°C</div>
        <div class="weather">{{ weather.name }}</div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      api_key: "7ad399f7a4f4ea29190d3cd20bb709e4",
      base_url: "https://api.openweathermap.org/data/2.5/",
      search_query: "",
      weather: {
        name: "None",
        temp: "0",
        city: "Somewhere",
        country: "Else",
        date: "Thursday 1 April 2021"
      }
    }
  },
  methods: {
    async fetchWeather() {
      var res = await fetch(`${this.base_url}weather?q=${this.search_query}&units=metric&appid=${this.api_key}`);
      const json = await res.json();
      this.weather.name = json.weather[0].main;
      this.weather.temp = json.main.temp;
      this.weather.city = json.name;
      this.weather.country = json.sys.country;
      this.weather.date = this.formatDate();

      // if (this.weather.temp >= 25) document.querySelector("#app").style.background = "url('./assets/warm-bg.jpg')";
    },
    formatDate() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"]
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]

      let date = new Date();
      let formattedDate = "";

      formattedDate += `${days[date.getDay()]} `;
      formattedDate += `${date.getDay()} `;
      formattedDate += `${months[date.getMonth()]} `;
      formattedDate += `${date.getFullYear()} `;

      return formattedDate;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Monsterrat", sans-serif;
}

#app {
  background: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
}

main {
  min-height: 100vh;
  padding: 1.5rem;
}

.search-div {
  width: 100%;
  margin-bottom: 3rem;
}

.search-location {
  width: 75%;
  padding: .5rem;

  appearance: none;
  outline: none;
  border: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-location:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.search-btn {
  width: 20%;
  padding: .5rem;
  margin-left: 3%;

  appearance: none;
  outline: none;
  border: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-btn:hover {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px 0px 16px 0px;
}

.location {
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-div {
  text-align: center;
}

.temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

@media (max-width: 675px) {
  main {
    padding: 1rem .5rem;
  }

  .temp {
    font-size: 64px;
  }
}
</style>

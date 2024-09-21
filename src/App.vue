<script >
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';

export default {
  name:'App',
  components: {
    Header
  },
  data() {
    return {
      weatherData: null, 
      error: null 
    };
  },
  methods: {
    async fetchWeather(city) {
      this.error = null;
      this.weatherData = null;

      if (!city || city.trim() === "") {
        this.error = "Per favore inserisci una città.";
        return;
      }

      const url = `${store.apiUrl}q=${city}&appid=${store.apiParams.appid}&units=metric`;

      try {
        const response = await axios.get(url);
        this.weatherData = response.data.list[0];
        this.cityName = response.data.city.name; 
        console.log(this.weatherData); 
      } catch (error) {
        this.error = "Città non trovata. Per favore riprova.";
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <Header @search="fetchWeather" />

  <div class="container">
    <!-- <h1>App Meteo</h1> -->

    <!-- Visualizzazione dati meteo -->
    <div v-if="weatherData">
      <h2>Meteo a {{ cityName }}</h2> 
      <p><strong>Temperatura:</strong> {{ weatherData.main.temp }}°C</p>
      <p><strong>Condizioni:</strong> {{ weatherData.weather[0].description }}</p>
      <p><strong>Umidità:</strong> {{ weatherData.main.humidity }}%</p>
      <p><strong>Vento:</strong> {{ weatherData.wind.speed }} m/s</p>
    </div>

    <!-- Messaggio di errore -->
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use './scss/main.scss' as *;

body {
  background: linear-gradient(135deg, #1FA0FF, #12DAFB, #A7FDCC);
  min-height: 100vh;
  font-family: 'DM Mono', monospace;
}

</style>

<script >
import { store } from './data/store';
import axios from 'axios';

export default {
  name:'App',
  data() {
    return {
      store
    }
  },
  methods: {

    async getWeather(city) {
      const url = `${store.apiUrl}q=${city}&appid=${store.apiParams.appid}&units=metric`;
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Errore durante la chiamata API:', error);
        throw error;
      }
    }
  }

}
</script>

<template>
  <h1>app meteo</h1>
</template>

<style lang="scss">

</style>

<script>
export default {
  name:'Header',
  data() {
    return {
      city: ''
    };
  },
  methods: {
    searchCity() {
      this.$emit('search', this.city);
    }
  }
}
</script>

<template>
  <header>
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        
        <div class="col-lg-8">
          <div class="input-group mb-3">
            <input v-model="city" type="text" class="form-control" placeholder="Inserisci una città" aria-label="Inserisci una città" aria-describedby="button-addon2" @keyup.enter="searchCity">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchCity">Cerca</button>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

header {
  height: 100px;
}
</style>
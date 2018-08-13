<template>
  <div id="app" class="app">
    <div class="search-input-wrapper">
      <input type="text" class="search-input" placeholder="Busque um MC..." v-model="search">
    </div>
    <mcs-list :query="search" />
  </div>
</template>

<script>
import McsList from './components/McsList.vue'

export default {
  name: 'app',
  components: {
    McsList,
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.search-input-wrapper {
  margin-bottom: 40px;
}

.search-input {
  border-radius: 8px;
  border:  4px solid lightblue;
  display: block;
  font-size: 28px;
  font-weight: bold;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  width: 600px;
}
</style>

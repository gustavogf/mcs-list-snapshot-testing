<template>
  <div>
    <ul class="list">
      <li class="list__item" v-for="mc in filteredList">{{ mc }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default: 'MC',
    },
  },
  computed: {
    filteredList() {
      return this.list.filter(mcName => {
        return mcName.toLowerCase().includes(this.query.toLowerCase())
      });
    },
  },
  data() {
    return {
      list: [
        'Don Juan',
        'Fioti',
        'Jerry Smith',
        'Kekel',
        'Kevinho',
        'Lan',
        'Loma',
        'MM',
        'Nego do Borel',
        'WM',
      ],
    };
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0 auto;
  max-width: 300px;
  padding-left: 0;
}

.list__item {
  background-color: #eee;
  border-radius: 8px;
  border: 2px solid darkgray;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 10px 15px;
  text-align: center;
}
</style>

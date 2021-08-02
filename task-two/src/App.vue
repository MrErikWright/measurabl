<template>
  <div id="app">
    <TableBase />
  </div>
</template>

<script>
import TableBase from './components/table/TableBase.vue';

export default {
  name: 'App',
  components: {
    TableBase,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

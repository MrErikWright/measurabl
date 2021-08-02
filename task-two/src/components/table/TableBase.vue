<template>
  <table class="table">
    <TableHeaders />
    <TableBody />
  </table>
</template>

<script>
import TableBody from './TableBody.vue';
import TableHeaders from './TableHeaders.vue';

export default {
  name: 'TableBase',
  components: {
    TableBody,
    TableHeaders,
  },
};
</script>

<style lang="scss" scoped>
  .table {
    border-collapse: collapse;
    width: 100%;
  }
</style>

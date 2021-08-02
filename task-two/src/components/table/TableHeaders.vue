<template>
  <thead>
    <th v-for="(header, index) in headers" :key="index">
      {{ header }}
    </th>
  </thead>
</template>

<script>
export default {
  computed: {
    headers() {
      return [
        'ID',
        'First Name',
        'Last Name',
        'Age',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  th {
    border-bottom: 1px solid #e2e2e2;
    padding: 0.5rem 0.5rem;
    text-align: left;
  }
</style>

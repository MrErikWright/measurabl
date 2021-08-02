<template>
  <tbody>
    <tr v-if="errorMessage" class="error-message">
      <td colspan="4">
        {{ errorMessage }}
      </td>
    </tr>

    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id || '-' }}</td>
      <td>{{ user.firstName || '-' }}</td>
      <td>{{ user.lastName || '-' }}</td>
      <td>{{ user.age || '-' }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  data: () => ({
    ages: [],
    baseApi: 'https://5c37c33f7820ff0014d927c5.mockapi.io/msr',
    errorMessage: null,
    names: [],
  }),
  computed: {
    users() {
      return this.names.concat(this.ages)
        .reduce((acc, obj) => {
          acc[obj.id] = Object.assign(acc[obj.id] || {}, obj);
          return acc;
        }, [])
        .filter(Boolean);
    },
  },
  created() {
    this.fetchAges();
    this.fetchNames();
  },
  methods: {
    fetchAges() {
      fetch(`${this.baseApi}/ages`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('An error occurred');
          }

          return response.json();
        })
        .then((data) => {
          this.ages = data;
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error(`There was an error! ${error}`);
        });
    },
    fetchNames() {
      fetch(`${this.baseApi}/names`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('An error occurred');
          }

          return response.json();
        })
        .then((data) => {
          this.names = data;
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error(`There was an error! ${error}`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  td {
    padding: 0.5rem 0.5rem;
  }

  .error-message {
    text-align: center;
  }
</style>

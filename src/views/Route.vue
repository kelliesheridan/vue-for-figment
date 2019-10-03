<template>
  <div class="route">
    <h1>This is a ROUTE page</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button> <br />
  </div>
</template>

<script>
export default {
  name: "route",
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    reset() {
      this.$store.commit('reset');
    }
  }
}
</script>

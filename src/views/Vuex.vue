<template>
  <div class="store">
    <h1>This is an store page</h1>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "store",
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
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Kellie.png">
    <Nav msg="This is a demo of a route"/>
    <Nav navMsg="This is a passed string from Home to Nav.vue component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>

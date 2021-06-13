<template>
  <div id="app">
    <the-nav />
    <router-view />
    <font-awesome-icon icon="user-secret" />
  </div>
</template>

<script>
import theNav from './components/TheNavigation.vue'
export default {
  components: { theNav },
  data() {
    return {
      route: this.$route.fullPath
    }
  }
}
</script>

<style lang="scss">
$gray-brown: #67595E;
$coffe-pot: #A49393;
$skin: #EED6D3;
$rose-water: #E8B4B8;

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: $coffe-pot;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: white;
    }
  }
}

img {
  width: 100%;
  height: auto;
}

ul {
  padding-left: 0;
  list-style: none;
}

.page-container {
  height: 100vh;
  background-color: $rose-water;
}

span.white-hightligh {
  color: ghostwhite;
  font-weight: 60;
}
</style>

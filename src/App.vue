<template>
  <div id="app">
    <the-nav />
    <router-view />
  </div>
</template>

<script>
import theNav from "./components/TheNavigation.vue";
export default {
  components: { theNav },
  data() {
    return {
      route: this.$route.fullPath,
    };
  },
};
</script>

<style lang="scss">
$gray-brown: #52688f;
$coffe-pot: #7391c8;
$skin: #e3e7f1;
$rose-water: #bdc6d9;

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

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}

img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

ul {
  padding-left: 0;
  list-style: none;
}

.page-container-dark {
  height: 100vh;
  background-color: $rose-water;
}

.page-container-light {
  height: 100vh;
  background-color: $skin;
}

h1 {
  margin-top: 0;
  padding-top: 1rem;
}

span.white-hightlight {
  color: cornflowerblue;
  font-weight: 600;
}
</style>

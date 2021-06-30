<template>
  <div id="app">
    <the-nav />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.slide-fade-enter-active {
  transition: all .8s linear;
}
.slide-fade-leave-active {
  transition: all .8s linear;
}
.slide-fade-enter {
  transform: translateX(10%);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(-10%);
  opacity: 1;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .page-container-dark {
    padding-bottom: 50px;
    height: auto;
  }

  .page-container-light {
    padding-bottom: 50px;
    height: auto;
  }
}
</style>

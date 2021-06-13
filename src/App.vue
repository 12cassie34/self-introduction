<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">關於我</router-link> |
      <router-link :to="{ name: 'Experience' }">程式工作經驗</router-link> |
      <router-link :to="{ name: 'Work' }">作品集</router-link> |
      <router-link :to="{ name: 'Other' }">其他工作經驗/技能</router-link> |
      <router-link :to="{ name: 'Contact' }">聯絡我</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

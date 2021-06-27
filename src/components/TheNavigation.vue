<template>
  <div id="nav">
    <router-link to="/">關於我</router-link> ‧
    <router-link :to="{ name: 'Experience' }">程式工作經驗</router-link> ‧
    <router-link :to="{ name: 'Work' }">作品集</router-link> ‧
    <router-link :to="{ name: 'Other' }">其他工作經驗/技能</router-link> ‧
    <router-link :to="{ name: 'Contact' }">聯絡我</router-link>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 320px) and (max-width: 575px) {
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
}
@media only screen and (min-width: 1400px) {
}
</style>

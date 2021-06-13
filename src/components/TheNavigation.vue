<template>
    <div id="nav">
      <router-link to="/">關於我</router-link> ‧
      <router-link :to="{ name: 'Experience' }">程式工作經驗</router-link> ‧
      <router-link :to="{ name: 'Work' }">作品集</router-link> ‧
      <router-link :to="{ name: 'Other' }">其他工作經驗/技能</router-link> ‧
      <router-link :to="{ name: 'Contact' }">聯絡我</router-link>
    </div>
</template>
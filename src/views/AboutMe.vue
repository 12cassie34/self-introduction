<template>
  <div class="page-container-dark">
    <div class="row">
      <div class="col-6 photo">
        <div class="container">
          <img :src="require('../assets/my-photo.jpg')" alt="Shan Yu Lin" />
          <h1>林珊玉 Shan-Yu LIN</h1>
          <p>ineslin35@gmail.com | 0989-191-313</p>
        </div>
      </div>
      <div class="col-6 profile">
        <div class="container">
          <h2>前端工程師</h2>
          <p>
            語言愛好者，喜愛<b>程式語言</b>和<b>自然語言</b>。
            真心相信程式可以產生巨大的影響力，<br />每日都在增強自己實力的路上。
          </p>
          <div class="vue-package">
            <ul>
              <li>
                ◇ Vue 生態系：<span class="white-hightlight">Vuex</span>、
                <span class="white-hightlight">Vue Router</span>
                、<br />&nbsp;&nbsp;&nbsp;&nbsp;Vuelidate、Vue I18n
              </li>
              <li>
                ◆ Vanilla JavaScript、
                <span class="white-hightlight">jQuery</span>
              </li>
              <li>◇ HTML5、CSS3 (SCSS)</li>
              <li>◆ RWD 響應式網頁開發</li>
              <li>◆ PHP、MYSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  .col-6 {
    margin: 0 auto;
    max-width: 40%;
    flex: 0 0 40%;
    .container {
      margin: 20vh auto 0 auto;
      width: 300px;
    }
  }
  .col-6.photo {
    .container {
      margin-right: 0;
    }
    img {
      border-radius: 45%;
      width: 200px;
      height: 200px;
    }
  }
  .col-6.profile {
    .container {
      margin-top: 25vh;
      margin-left: 0;
      ul {
        text-align: left;
      }
    }
  }
}

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

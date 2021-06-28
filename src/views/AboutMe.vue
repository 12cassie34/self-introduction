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
                <font-awesome-icon icon="check"></font-awesome-icon>
                <p>Vue 生態系：<span class="white-hightlight">Vuex</span>、
                <span class="white-hightlight">Vue Router</span>
                、Vuelidate、Vue I18n</p>
              </li>
              <li>
                <font-awesome-icon icon="check"></font-awesome-icon>
                <p>Vanilla JavaScript、<span class="white-hightlight">jQuery</span></p>
              </li>
              <li>
                <font-awesome-icon icon="check"></font-awesome-icon>
                <p>HTML5、CSS3 (SCSS)</p>
              </li>
              <li>
                <font-awesome-icon icon="check"></font-awesome-icon>
                <p>RWD 響應式網頁開發</p>
              </li>
              <li>
                <font-awesome-icon icon="check"></font-awesome-icon>
                <p>PHP、MYSQL</p>
              </li>
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
        li {
          display: inline-flex;
          align-items: baseline;
          p {
              margin-left: 8px;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .row {
    flex-direction: column;
    .col-6 {
      max-width: 100%;
      .container {
        margin-top: 20px;
      }  
    }
    .col-6.profile {
      .container {
        margin-top: 20px;
      }
    }
  }
  .vue-package {
    margin-top: 1rem;
  }
}
</style>

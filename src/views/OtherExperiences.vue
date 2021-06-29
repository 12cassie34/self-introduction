<template>
  <div id="other-experience" class="page-container-light">
    <h1>其他工作經驗/技能</h1>
    <section class="work-experience">
      <h2>其他工作經驗</h2>
      <div class="item">
        <div class="title-period">
          <h3 class="title">責任編輯 / 瑞蘭國際出版社</h3>
          <p class="period">2017.05 - 2020.03</p>
        </div>
        <div class="job-description">
          <p>團隊溝通能力 | 遵守時程與專案控管 | 細心與耐心</p>
        </div>
      </div>
      <div class="item">
        <div class="title-period">
          <h3 class="title">國外業務 / 高力熱處理股份有限公司</h3>
          <p class="period">2015.09 - 2017.02</p>
        </div>
        <div class="job-description">
          <p>跨國、跨部門團隊合作 | 獨立陌生客戶開發</p>
        </div>
      </div>
    </section>
    <section class="education">
      <h2>教育程度</h2>
      <div class="item">
        <div class="title-period">
          <h3 class="title">中央大學法文系學士</h3>
          <p class="period">2011.09 - 2015.06</p>
        </div>
      </div>
    </section>
    <section class="languages">
      <h2>其他技能</h2>
      <div class="item">
        <div class="title-period">
          <p class="title">
            英語：多益 910<br />
            法語：DELF B2，日常聽說讀寫無礙
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#other-experience {
  section {
    margin: 0 auto;
    width: 70%;
    text-align: left;
    h2 {
      margin-bottom: 0;
    }
    .item {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .title-period {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p.period {
        color: gray;
      }
    }
    .job-description {
      p {
        margin-top: 0;
      }
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 575px) {
  #other-experience {
    section {
      .title-period {
        flex-direction: column;
        align-items: flex-start;
      }
      .job-description {
        margin-top: 1rem;
      }
    }
  }
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

<template>
  <div class="page-container-light">
    <h1>程式工作經驗</h1>
    <div class="work-experience">
      <h2>前端工程師 / AIPLUX 睿加科技</h2>
      <h3>
        2020.06 - {{ today }} | 共 {{ yearAmount }} 年 {{ monthAmount }} 個月
      </h3>
      <a href="https://aiplux.com" target="_blank" rel="noopener noreferrer">
        <span class="white-hightlight">公司網站</span>
      </a>
      <div class="experience-row">
        <div class="col-6">
          <h3>前台</h3>
          <ul>
            <li>
              <font-awesome-icon icon="circle-notch"></font-awesome-icon>
              <span>根據設計稿，切出官網頁面版型（含 RWD）</span>
            </li>
          </ul>
        </div>
        <div class="col-6">
          <h3>後台</h3>
          <ul>
            <li>
              <font-awesome-icon icon="circle-notch"></font-awesome-icon>
              <span
                >運用 Vue、Vuex、Vuelidate
                完成臺灣、中國、美國商標申請表單，並利用 axios
                串接後端來儲存表單資料</span
              >
            </li>
            <li>
              <font-awesome-icon icon="circle-notch"></font-awesome-icon>
              <span>串接商標資料庫，製作商標檢索功能</span>
            </li>
            <li>
              <font-awesome-icon icon="circle-notch"></font-awesome-icon>
              <span>使用 Vue、Vue Router 執行公司後台案件管理功能</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: "",
      yearAmount: "",
      monthAmount: "",
    };
  },
  methods: {
    getToday() {
      let timeInMs = new Date();
      let year = timeInMs.getFullYear();
      let month = timeInMs.getMonth() + 1;
      let actualMonth = "";
      if (month < 10) {
        actualMonth = `0${month}`;
      }
      this.today = `${year}.${actualMonth}`;
    },
    getPeriod() {
      let startWork = new Date("2020/06/09");
      let untilNow = new Date();
      this.yearAmount = untilNow.getFullYear() - startWork.getFullYear();
      this.monthAmount = untilNow.getMonth() - startWork.getMonth();
    },
  },
  mounted() {
    this.getToday();
    this.getPeriod();
  },
};
</script>

<style lang="scss" scoped>
.experience-row {
  margin: 0 auto;
  display: flex;
  width: 70vw;
  .col-6 {
    flex: 50%;
    ul {
      text-align: left;
      li {
        margin-bottom: 1rem;
        display: inline-flex;
        align-items: baseline;
        span {
          margin-left: 0.5rem;
        }
      }
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .experience-row {
    flex-direction: column;
    .col-6 {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
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

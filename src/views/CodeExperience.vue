<template>
    <div class="page-container-light">
        <h1>程式工作經驗</h1>
        <div class="work-experience">
            <h2>前端工程師 / AIPLUX 睿加科技</h2>
            <h3>2020.06 - {{ today }} | 共 {{ yearAmount }} 年 {{ monthAmount }} 個月</h3>
            <a href="https://aiplux.com" target="_blank" rel="noopener noreferrer">
                <span class="white-hightlight">公司網站</span>
            </a>
            <div class="experience-row">
                
                <div class="col-6">
                    <h3>前台</h3>
                    <ul>
                        <li>◇ 根據設計稿，切出官網頁面版型（含 RWD）</li>
                    </ul>
                </div>
                <div class="col-6">
                    <h3>後台</h3>
                    <ul>
                        <li>◇ 運用 Vue、Vuex、Vuelidate 完成臺灣、中國、美國商標申請<br>&nbsp;&nbsp;&nbsp;表單，並利用 axios 串接後端來儲存表單資料</li>
                        <li>◆ 串接商標資料庫，製作商標檢索功能</li>
                        <li>◇ 使用 Vue、Vue Router 執行公司後台案件管理功能</li>
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
            today: '',
            yearAmount: '',
            monthAmount: ''
        }
    },
    methods: {
        getToday() {
            let timeInMs = new Date();
            let year = timeInMs.getFullYear();
            let month = timeInMs.getMonth() + 1;
            let actualMonth = '';
            if (month < 10) {
                actualMonth = `0${month}`;
            }
            this.today = `${year}.${actualMonth}`;
        },
        getPeriod() {
            let startWork = new Date('2020/06/09');
            let untilNow = new Date();
            this.yearAmount = untilNow.getFullYear() - startWork.getFullYear();
            this.monthAmount = untilNow.getMonth() - startWork.getMonth();
        }
    },
    mounted() {
        this.getToday();
        this.getPeriod();
    }
}
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
        }
    }
}
</style>
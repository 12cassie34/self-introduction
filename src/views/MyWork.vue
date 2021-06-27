<template>
  <div class="page-container-dark">
    <h1>作品集</h1>
    <div class="project-container clearfix">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <h2>{{ project.name }}</h2>
        <p class="description">{{ project.description }}</p>
        <div class="langs">
          <p
            v-for="(lang, index) in project.lang"
            :key="index"
            :class="
              lang === 'Vue'
                ? 'vue'
                : '' || lang === 'JavaScript'
                ? 'js'
                : '' || lang === 'PHP'
                ? 'php'
                : '' || lang === 'HTML'
                ? 'html'
                : '' || lang === 'CSS'
                ? 'css'
                : '' || lang === 'SCSS'
                ? 'css'
                : '' || lang === 'Hack'
                ? 'other'
                : ''
            "
            class="tag"
          >
            {{ lang }}
          </p>
        </div>
        <a :href="project.link" target="_blank" rel="noopener noreferrer"
          >連結</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    const vm = this;
    this.$axios
      .get("https://api.github.com/users/12cassie34/repos")
      .then((response) => {
        response.data.forEach((project) => {
          vm.$axios
            .get(
              `https://api.github.com/repos/12cassie34/${project.name}/languages`
            )
            .then((response) => {
              project.langs = Object.keys(response.data);
              let projectInfo = {
                name: project.name,
                description: project.description,
                link: `https://github.com/${project.full_name}`,
                lang: project.langs,
              };
              this.projects.push(projectInfo);
            });
        });
      });
  },
};
</script>

<style lang="scss" scoped>
.project-container {
  margin: 0 auto;
  width: 85vw;
  .project {
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    display: flow-root;
    float: left;
    width: 25vw;
    height: 250px;
    h2 {
      padding: 15px;
      border-radius: 45px;
      background-color: #67595e;
      color: white;
      text-align: right;
    }
    p.description {
      height: 3.5rem;
      text-align: left;
      color: white;
    }
    .langs {
      display: flex;
      justify-content: space-around;
      p.tag {
        margin-top: 0;
        border-radius: 45px;
        padding: 6px;
        display: flex;
        align-items: center;
      }
      p.tag.vue {
        background-color: #41b883;
        color: white;
      }
      p.tag.js {
        background-color: #034687;
        color: white;
      }
      p.tag.php {
        background-color: #ffce13;
      }
      p.tag.html {
        background-color: #000000;
        color: white;
      }
      p.tag.css {
        background-color: #bf4080;
        color: white;
      }
      p.tag.other {
        background-color: #e2b080;
      }
    }
    a {
      border: 1.5px solid;
      border-radius: 45px;
      padding: 6px;
      color: #2c3e50;
      font-weight: 600;
    }
    a:hover {
      border: #2c3e50;
      background-color: #2c3e50;
      color: white;
    }
  }
}
</style>

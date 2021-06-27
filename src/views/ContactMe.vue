<template>
  <div class="page-container-dark">
    <h1>聯絡我</h1>
    <div class="normal-contact">
      <div class="contact">
        <font-awesome-icon icon="envelope-open-text"></font-awesome-icon>
        ineslin35@gmail.com
      </div>
      <div class="contact">
        <font-awesome-icon icon="mobile-alt"></font-awesome-icon>
        0989-191-313
      </div>
    </div>
    <div class="line"></div>
    <div class="social-media">
      <div class="contact">
        <a
          href="https://medium.com/@cassiecoding"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="content">
            <font-awesome-icon :icon="['fab', 'medium-m']" />

            <p>Cassie，來學！</p>
          </div>
        </a>
      </div>
      <div class="contact">
        <a
          href="https://codepen.io/shanyulin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="content">
            <font-awesome-icon :icon="['fab', 'codepen']" />
            <p>Codepen</p>
          </div>
        </a>
      </div>
      <div class="contact">
        <a
          href="https://www.freecodecamp.org/fcc2cd5faca-aaf8-4e4a-b390-ebf53e44a79e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="content">
            <font-awesome-icon :icon="['fab', 'free-code-camp']" />
            <p>freeCodeCamp</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  svg {
    margin-right: 0.5rem;
    color: white;
  }
}

.line {
  margin: 0 auto 1rem auto;
  width: 30%;
  height: 0.1rem;
  background-color: #52688f;
}

.social-media {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 80%;
  .contact {
    border: 1px solid #52688f;
    border-radius: 90%;
    width: 170px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52688f;
    color: white;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 0;
      }
    }
    svg {
      font-size: 3rem;
    }
    a {
      color: white;
    }
  }
}
</style>
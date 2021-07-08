import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from "../views/AboutMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: AboutMe,
  },
  {
    path: "/",
    name: "Home",
    component: AboutMe,
  },
  {
    path: "/code-experience",
    name: "Experience",
    component: () =>
      import(
        /* webpackChunkName: "code-experience" */ "../views/CodeExperience.vue"
      ),
  },
  {
    path: "/my-work",
    name: "Work",
    component: () =>
      import(/* webpackChunkName: "my-work" */ "../views/MyWork.vue"),
  },
  {
    path: "/other-experience",
    name: "Other",
    component: () =>
      import(
        /* webpackChunkName: "other-experience" */ "../views/OtherExperiences.vue"
      ),
  },
  {
    path: "/contact-me",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact-me" */ "../views/ContactMe.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

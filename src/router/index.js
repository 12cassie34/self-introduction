import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from "../views/AboutMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/self-introduction/",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/self-introduction/code-experience",
    name: "Experience",
    component: () =>
      import(
        /* webpackChunkName: "code-experience" */ "../views/CodeExperience.vue"
      )
  },
  {
    path: "/self-introduction/my-work",
    name: "Work",
    component: () =>
      import(/* webpackChunkName: "my-work" */ "../views/MyWork.vue")
  },
  {
    path: "/self-introduction/other-experience",
    name: "Other",
    component: () =>
      import(
        /* webpackChunkName: "other-experience" */ "../views/OtherExperiences.vue"
      )
  },
  {
    path: "/self-introduction/contact-me",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact-me" */ "../views/ContactMe.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router;

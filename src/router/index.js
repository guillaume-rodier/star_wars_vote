import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    meta: {
      title: "List candidates",
      icon: "https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Death-Star-icon.png",
    },
  },
  {
    path: "/results-vote",
    name: "vote",
    component: () =>
      import(/* webpackChunkName: "vote" */ "../views/VoteView.vue"),
    meta: {
      title: "List candidates",
      icon: "https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Death-Star-icon.png",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  const link = document.querySelector("[rel='icon']");
  link.setAttribute("href", to.meta.icon);
  next();
});

export default router;

import * as VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import medical from "../views/MediCal.vue";
import OurPartners from "../views/OurPartners.vue";
import strategy from "../views/OurStrategy.vue";
import time from "../views/TimeLine.vue";
import team from "../views/OurTeam.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/medical",
    name: "medical",
    component: medical,
  },
  {
    path: "/partners",
    name: "OurPartners",
    component: OurPartners,
  },
  {
    path: "/strategy",
    name: "strategy",
    component: strategy,
  },
  {
    path: "/time",
    name: "time",
    component: time,
  },
  {
    path: "/team",
    name: "team",
    component: team,
  },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createMemoryHistory(),
  routes, // short for `routes: routes`
})

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "../components/HomeSection";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: home },
];

const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
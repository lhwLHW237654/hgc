import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

//全局进度条的配置
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
  color: "#F9D783",
});

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import("@/page/error/404.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/page/home/index.vue"),
  },
  {
    path: "/about",
    component: () => import("@/page/about/index.vue"),
  },
  {
    path: "/product",
    component: () => import("@/page/product/index.vue"),
  },
  {
    path: "/productDetail",
    component: () => import("@/page/product/detail.vue"),
  },
  {
    path: "/news",
    component: () => import("@/page/news/index.vue"),
  },
  {
    path: "/recruitment",
    component: () => import("@/page/recruitment/index.vue"),
  },
  {
    path: "/QE",
    component: () => import("@/page/QE/index.vue"),
  },
  {
    path: "/contactus",
    component: () => import("@/page/contactus/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.done();
  NProgress.start();
  next();
});
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
  NProgress.done();
});

export default router;

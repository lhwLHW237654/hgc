import { createApp } from "vue";
import App from "./App.vue";

//引入全局方法
import "./utils/global.js";

// pinia
import pinia from "@/store/index.js";
// 路由
import router from "@/router/index.js";
// 引入图标
import { install } from "@icon-park/vue-next/es/all";
import "@icon-park/vue-next/styles/index.css";

//导入ui库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import VAnimateCss from "v-animate-css";
import smoothDirective from "@/utils/directives/smooth.js";

import VxeUI from "vxe-pc-ui";
import "vxe-pc-ui/lib/style.css";

import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

import VueI18n from "./locales/index.js";

//顶部进度条样式
import "@/assets/style/nprogress.css";
import "./style.css";

const app = createApp(App);
//注册图标
install(app, "i");
app.use(VAnimateCss);
app.use(VxeUI);
app.use(VxeUITable);
app.directive("smooth", smoothDirective);
app.use(VueI18n);
// 使用pinia模块
app.use(pinia);
// 使用路由
app.use(router);
app.use(ElementPlus);
app.mount("#app");

document.title = VueI18n.global.t("htmlTitle");

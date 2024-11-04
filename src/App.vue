<template>
  <div class="app" v-animate-css="'fadeIn'">
    <div class="header f ac">
      <el-menu menu-trigger="click" :default-active="activeIndex" class="menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <div class="logo f ac">
          <img class="image" src="@/assets/logo.svg" />
          <div class="title fc jb">
            <span class="text">
              {{ $t("title.text") }}
            </span>
            <span class="sub">
              {{ $t("title.subtext") }}
            </span>
          </div>
        </div>
        <el-menu-item :index="item.path.replace('/', '')" v-for="(item, index) in menu" :key="index">{{ $t(item.name) }}</el-menu-item>
        <el-dropdown @command="languageChange" trigger="click" style="margin-left: 20px" class="c">
          <span style="outline: none; cursor: pointer">
            <i-translate theme="outline" size="20" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh">汉语</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-menu>
    </div>
    <div class="main" v-smooth v-show="!noSmoothList.includes(activeIndex)">
      <router-view />
      <footBox />
    </div>
    <div class="main" v-show="noSmoothList.includes(activeIndex)">
      <router-view />
      <footBox />
    </div>
  </div>
</template>

<script setup>
const noSmoothList = ["about", "productDetail"];

import store from "@/store/modules/main.js";
import footBox from "@/components/footBox.vue";
import VueI18n from "@/locales/index.js";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { menu } = storeToRefs(store());

watch(locale, () => {
  document.title = VueI18n.global.t("htmlTitle");
});

import Router from "@/router/index.js";
watch(
  () => Router.currentRoute.value.path,
  (n, o) => {
    const name = n.replace("/", "");
    if (name) {
      activeIndex.value = name;
    }
  },
  { immediate: true }
);

const activeIndex = ref("home");

const router = useRouter();
const handleSelect = (key, keyPath) => {
  router.push(key);
};

function languageChange(command) {
  locale.value = command;
}
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 60px;
    width: 100%;
    // background-color: #fff;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
    padding-left: 50px;
    padding-right: 50px;
    .languageChange {
      cursor: pointer;
    }
    .menu {
      width: 100%;
      border: none !important;
      .logo {
        cursor: pointer;
        margin-right: auto;
        .image {
          height: 80%;
        }
        .title {
          text-wrap: nowrap;
          .text {
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
          }
          .sub {
            font-size: 12px;
            line-height: 24px;
          }
        }
      }
    }
  }
  .main {
    padding-top: 60px;
    height: 100vh;
    overflow: auto;
  }
}
:deep(.el-menu) {
  background-color: transparent !important;
}
:deep(.el-menu-item) {
  background-color: transparent !important;
}
:deep(.is-active) {
  background-color: transparent !important;
}
</style>

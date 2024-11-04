<template>
  <div class="pictureBox">
    <div class="title">
      <span class="text">{{ $t("about.pictureBox.title") }}</span>
    </div>
    <div class="main">
      <Waterfall :list="data" :breakpoints="breakpoints" crossOrigin>
        <template #default="{ item }">
          <div class="card fc ac">
            <LazyImg :url="item.url" />
            <p class="text">{{ item.title[locale] }}</p>
          </div>
        </template>
      </Waterfall>
      <!-- <div class="wrapper">
        <div class="item" v-for="(item, index) in data" :key="index">
          <div class="fc ac">
            <el-image :src="item.url"></el-image>
            <span class="text">{{ item.title[locale] }}</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
const data = defineModel();

const breakpoints = ref({
  1920: { rowPerView: 4 },
  1200: { rowPerView: 3 },
  800: { rowPerView: 2 },
  500: { rowPerView: 1 },
});
</script>

<style lang="scss" scoped>
.pictureBox {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  .title {
    width: 80%;
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 50px;
    padding-left: 10%;
    .text {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: -10px;
        border-radius: 4px;
        height: 5px;
        width: 50%;
        background-color: #409eff;
      }
    }
  }
  .main {
    padding-left: 10%;
    padding-right: 10%;
    // .wrapper {
    //   column-count: 4;
    //   column-gap: 0;
    // }

    // .item {
    //   box-sizing: border-box;
    //   break-inside: avoid;
    //   padding: 10px;
    //   .text {
    //     font-size: 20px;
    //     font-weight: 600;
    //     margin-top: 10px;
    //   }
    // }
  }
}
</style>

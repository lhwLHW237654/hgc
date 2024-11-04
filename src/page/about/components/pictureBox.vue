<template>
  <div class="pictureBox">
    <div class="title">
      <span class="text">{{ $t("about.pictureBox.title") }}</span>
    </div>
    <div class="main f w">
      <!-- <el-card v-for="(item, index) in list" :key="index">
        <template #header>
          <span>{{ item[0].title[locale] }}</span>
        </template>
        <el-image class="image" v-for="(item2, inde2x) in item" :key="index2" :src="item2.url" fit="cover"></el-image>
      </el-card> -->
      <div class="card ac fc" v-for="(item, index) in list" :key="index">
        <div class="imageBox">
          <el-image class="image" :src="item[0].url" fit="cover" :preview-src-list="item.map((item) => item.url).filter(Boolean)"></el-image>
        </div>
        <span>{{ item[0].title[locale] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const data = defineModel();
const list = computed(() => {
  const obj = {};
  data.value.forEach((item) => {
    if (obj[item.title.zh]) {
      obj[item.title.zh].push(item);
    } else {
      obj[item.title.zh] = [item];
    }
  });
  return obj;
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
    .card {
      margin: 20px;
      cursor: pointer;
      .imageBox {
        position: relative;
        &::after {
          content: "";
          top: 0px;
          right: 0px;
          position: absolute;
          height: 95%;
          width: 95%;
          background-color: #00317d;
          z-index: -1;
          border-radius: 4px;
        }

        .image {
          height: 200px;
          width: 250px;
          margin: 5px;
          border-radius: 4px;
        }
      }
    }
    // & > * {
    //   &:not(:first-child) {
    //     margin-top: 20px;
    //   }
    // }
    // .image {
    //   height: 150px;
    //   margin: 5px;
    // }
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

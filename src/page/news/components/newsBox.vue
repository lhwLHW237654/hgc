<template>
  <div class="newsBox">
    <div class="title">
      <span>{{ $t(props.title) }}</span>
    </div>
    <div class="content f w">
      <div class="item ac fc" @click="showNewsDialog(item)"  v-for="(item, index) in data" :key="index" :style="{ background: item.background }">
        <el-image :src="item.url" fit="cover" class="image" />
        <span class="text">{{ item.title[locale] }}</span>
        <span class="sub">{{ item.sub[locale] }}</span>
      </div>
    </div>
    <newsDialog v-model="newsDialogFlag" :data="showData" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import newsDialog from "@/page/news/components/newsDialog.vue";

const { locale } = useI18n();

const data = defineModel();

const props = defineProps(["title"]);
const newsDialogFlag = ref(false);
const showData = ref({});
const showNewsDialog = (item) => {
  showData.value = { ...item };
  newsDialogFlag.value = true;
};
</script>

<style lang="scss" scoped>
.newsBox {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 10%;
  padding-right: 10%;
  .title {
    width: 80%;
    font-size: 36px;
    font-weight: 800;
    span {
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
  .content {
    padding-top: 50px;
    .item {
      margin: 5px;
      width: 300px;
      border-radius: 4px;
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-20px);
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: -10px;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
      .image {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        border-radius: 4px;
      }
      .text {
        font-size: 18px;
        color: #333436;
        line-height: 26px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 12px;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .sub {
        font-size: 13px;
        line-height: 24px;
        color: #727476;
        font-weight: 300;
        display: -webkit-box;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
-

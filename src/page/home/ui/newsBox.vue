<template>
  <div class="newsBox">
    <div class="title" :style="titleStyle">
      <span>{{ $t("newsBox.title") }}</span>
    </div>
    <div class="content f w" :style="{ paddingTop: data.title.titleBottom }">
      <div
        class="item ac fc"
        @click="showNewsDialog(item)"
        v-for="(item, index) in data.newsList"
        :key="index"
        :style="{ background: item.background }">
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

const titleStyle = computed(() => ({
  fontSize: data.value.title.size,
  fontWeight: data.value.title.weight,
}));
const data = defineModel();
const newsDialogFlag = ref(false);

const showData = ref({});
const showNewsDialog = (item) => {
  showData.value = { ...item };
  newsDialogFlag.value = true;
};
</script>

<style lang="scss" scoped>
.newsBox {
  .title {
    width: 80%;
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
    width: 100%;
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

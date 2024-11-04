<template>
  <div class="productItem ac fc jb" :style="{ background: data.background, paddingTop: data.paddingTop }" v-animate-css="data.animation">
    <el-image :src="data.url" class="image" fit="cover" />
    <span class="title" :style="titleStyle">{{ data.title[locale] }}</span>
    <el-button class="btn" text type="primary">{{ $t("productItem.btn") }}</el-button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const data = defineModel();

const titleStyle = computed(() => ({
  fontSize: data.value.fontStyle.size,
  fontWeight: data.value.fontStyle.weight,
}));
</script>

<style lang="scss" scoped>
.productItem {
  height: 100%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
  .image {
    width: 70%;
    border-radius: 4px;
    aspect-ratio: 1 / 1;
  }
  .title {
    margin: 10px;
  }
  .btn {
    margin: 10px;
  }
}
</style>

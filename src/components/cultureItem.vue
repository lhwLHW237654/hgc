<template>
  <div class="cultureItem fc ac">
    <el-image class="image" :src="item.url" fit="cover"></el-image>
    <span class="title">{{ item.title[locale] }}</span>
    <span class="sub">{{ item.sub[locale] }}</span>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const item = defineModel();
</script>

<style lang="scss" scoped>
.cultureItem {
  .image {
    border-radius: 16px;
    height: 200px;
    width: 70%;
  }
  .title {
    margin-top: 20px;
    font-size: 17px;
    color: #393939;
    line-height: 30px;
    font-weight: 600;
  }
  .sub {
    color: #444;
    text-align: center;
    padding: 20px 10px;
  }
}
</style>

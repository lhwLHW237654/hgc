<template>
  <div class="companyInfo fc ac" :style="getStyle(data.background)">
    <div class="content c">
      <div :style="contentStyle">
        {{ data.text[locale] }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

function getStyle(background) {
  if (background && background.includes("http")) {
    background = `url(${background})`;
  }
  return { background: background };
}

const contentStyle = computed(() => ({
  width: data.value.width,
  fontSize: data.value.size,
  fontWeight: data.value.weight,
  lineHeight: data.value.lineHeight,
  marginLeft: data.value.x,
}));

const data = defineModel();
</script>

<style lang="scss" scoped>
.companyInfo {
  padding-bottom: 150px;
  padding-top: 100px;
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
    margin-top: 50px;
    width: 100%;
    span {
      line-height: 20px;
    }
  }
}
</style>

<template>
  <div class="companyInfo fc ac" :style="getStyle(data.background)">
    <div class="content c">
      <div class="imageBox" :style="{ width: data.image.width, height: data.image.height }">
        <el-image class="image" :src="data.image.url" :fit="data.image.fit"></el-image>
      </div>
      <div :style="contentStyle" class="textBox" v-html="data.text[locale]"></div>
    </div>
    <div class="card f je">
      <div class="box" v-for="(item, index) in data.card" :key="index">
        <div class="f ac">
          <component :is="item.icon" :size="64"></component>
          <div class="fc info jb">
            <span>{{ item.title[locale] }}</span>
            <span>{{ item.text[locale] }}</span>
          </div>
        </div>
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
    .imageBox {
      height: 100%;
      overflow: hidden;
      margin-right: 10px;
    }
    .textBox {
      height: 100%;
    }
  }
  .card {
    width: 100%;
    margin-top: 50px;
    .box {
      &:not(:first-child) {
        margin-left: 10px;
      }
      width: 20%;
      background: #fff;
      padding: 40px;
      border-radius: 10px;
      overflow: hidden;
      transition: 0.4s;
      color: #2d2d2d;
      box-shadow: 0 4px 10px #ccc;
      span {
        color: #409eff;
      }
      &:hover {
        cursor: pointer;
        box-shadow: 0 4px 20px #ccc;
      }
      .info {
        margin-left: 10px;
      }
    }
  }
}
</style>

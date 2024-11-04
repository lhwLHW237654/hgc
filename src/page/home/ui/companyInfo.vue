<template>
  <div class="companyInfo fc ac" :style="{ height: data.height }">
    <div class="title" :style="titleStyle">
      <span>{{ $t("companyInfoTitle") }}</span>
    </div>
    <div class="content f jb" :style="{ paddingTop: data.title.titleBottom, width: data.content.width }">
      <div class="imageBox" :style="{ width: data.content.image.width, height: data.content.image.height }">
        <el-image class="image" :src="data.content.image.url" :fit="data.content.image.fit"></el-image>
      </div>
      <div class="textBox" :style="{ width: data.content.textBox.width }">
        <div class="title">{{ $t("title.name") }}</div>
        <div class="text" :style="contentStyle" v-html=data.content.textBox.text[locale]> </div>
        <div class="btn" @click="$router.push('/about')">
          {{ $t("companyInfoBtn") }}
          <i-arrow-right />
        </div>
      </div>
    </div>
    <div class="card f je" :style="{ paddingTop: data.title.titleBottom, width: data.content.width }">
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

const titleStyle = computed(() => ({
  fontSize: data.value.title.size,
  fontWeight: data.value.title.weight,
}));

const contentStyle = computed(() => ({
  fontSize: data.value.content.textBox.size,
  fontWeight: data.value.content.textBox.weight,
  lineHeight: data.value.content.textBox.lineHeight,
  color: data.value.content.textBox.color,
  whiteSpace:'break-spaces',
  textIndent: '2em'
}));

const data = defineModel();
</script>

<style lang="scss" scoped>
.companyInfo {
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
    height: 100%;
    .imageBox {
      margin: 5px;
      border-radius: 4px;
      overflow: hidden;
      .image {
        width: 100%;
        height: 100%;
      }
    }
    .textBox {
      margin: 10px;
      font-size: 16px;
      height: 100%;
      .title {
        font-size: 28px;
        line-height: 40px;
        color: #333436;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .btn {
        cursor: pointer;
        margin-top: 20px;
        font-size: 18px;
        color: #333436;
        font-weight: bold;
        line-height: 40px;
        transition: all 0.3s;
        &:hover {
          transform: translateX(20px);
        }
      }
    }
  }
  .card {
    width: 100%;
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

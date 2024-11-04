<template>
  <div class="productionBase">
    <div class="title">
      <span class="text">{{ $t("about.productionBase.title") }}</span>
    </div>
    <div class="main">
      <span>
        {{ data.text[locale] }}
      </span>
      <el-row class="row" :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(item, index) in data.imageList" :key="index">
          <div class="box f jb">
            <el-image class="image" :src="item" fit="cover"></el-image>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const data = defineModel();
</script>

<style lang="scss" scoped>
.productionBase {
  background-color: #fff;
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
    span {
      font-size: 14px;
      line-height: 28px;
      font-weight: 300;
      margin-top: 30px;
    }
    .box {
      margin-top: 50px;
      width: 100%;
      .image {
        border-radius: 16px;
        height: 400px;
        width: 100%;
      }
    }
  }
}
</style>

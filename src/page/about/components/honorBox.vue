<template>
  <div class="honor">
    <div class="title">
      <span class="text">{{ $t("about.honor.title") }}</span>
    </div>
    <div class="main c">
      <el-carousel type="card" class="carousel" height="500px" indicator-position="outside">
        <el-carousel-item v-for="item in data" :key="item" class="item">
          <div class="box c fc">
            <el-image :src="item.url" class="image" fit="contain" :preview-src-list="[item.url]" preview-teleported></el-image>
            <span class="text">{{ item.title[locale] }}</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const data = defineModel();
</script>

<style lang="scss" scoped>
.honor {
  background-color: #f6f6f6;
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
    width: 100%;
    height: 100%;
    .carousel {
      width: 90%;
      .box {
        background: #fff;
        border-radius: 6px;
        padding: 20px;
        min-width: 50vw;
        .image {
          width: 100%;
        }
        .text {
          margin-top: 20px;
        }
      }
    }
  }
}
:deep(.el-carousel__item) {
  display: flex;
  justify-content: center;
}
</style>

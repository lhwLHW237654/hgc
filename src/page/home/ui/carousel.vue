<template>
  <div class="carousel" ref="carouselRef">
    <el-carousel :height="data.height" v-bind="data.options">
      <el-carousel-item v-for="item in data.imgList" :key="item">
        <div class="box pr">
          <el-image :src="item.url" fit="cover" class="image" />
          <div class="text"   v-html="item.title[locale]" :key="item.title[locale]"></div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const data = defineModel();

</script>

<style lang="scss" scoped>
.carousel {
  .box {
    width: 100%;
    height: 100%;
    .image {
      height: 100%;
      width: 100%;
    }
    .text {
      width: 90%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      text-shadow: 10px 10px 20px rgba(255, 255, 255, 0.2);
      animation: fadeIn 2s;
    }
  }
}
:deep(.el-carousel__item) {
  display: flex;
  justify-content: center;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    margin-top: -200px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}
</style>

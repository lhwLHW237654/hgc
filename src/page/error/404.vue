<template>
  <div class="main c">
    <div class="box f">
      <!-- <Vue3Lottie :animationData="AstronautJSON" :height="400" :width="400" /> -->
      <div class="info fc je">
        <span class="text">页面不存在</span>
        <el-button class="btn" type="primary" @click="back">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Vue3Lottie } from "vue3-lottie";
// import AstronautJSON from "./404.json";
const router = useRouter();
function back() {
  router.push("/");
}
</script>

<style lang="scss" scoped>
.main {
  height: 80vh;
  margin-top: -60px;
  .info {
    .title {
      font-size: 150px;
      font-weight: 1000;
    }
    .text {
      font-size: 30px;
      font-weight: 600;
    }
    .btn {
      margin-top: 20px;
    }
  }
}
:deep(.lottie-animation-container) {
  margin: 0;
}
</style>

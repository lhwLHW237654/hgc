<template>
  <div class="culture">
    <div class="title">
      <span class="text">{{ $t("about.culture.title") }}</span>
    </div>
    <div class="main">
      <el-row class="row" :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="(item, index) in data" :key="index">
          <div class="box"><cultureItem v-model="data[index]" /></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import cultureItem from "@/components/cultureItem.vue";

const data = defineModel();
</script>

<style lang="scss" scoped>
.culture {
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
  }
}
</style>

<template>
  <div class="main fc">
    <div class="title">
      <span class="text">{{ $t("about.timeline.title") }}</span>
    </div>
    <div class="timeLine" @wheel="handleWheel" ref="timeLineRef">
      <el-timeline>
        <el-timeline-item :timestamp="dayjs(item.time).format('YYYY')" placement="top" v-for="(item, index) in data">
          <div class="box" :key="index" :id="'history' + item.id">
            <div class="card" :style="{ background: index % 2 == 0 ? '#fff' : '#fff' }">
              <div class="sub" v-html="item.sub[locale]"></div>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import dayjs from "dayjs";

const data = defineModel();

function handleWheel() {}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 100px;
  background-color: #f1f3f5;
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
  .timeLine {
    padding-left: 100px;
    padding-right: 100px;
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    .box {
      height: 100%;
      .card {
        padding: 40px;
        border-radius: 4px;
        // .time {
        //   font-size: 44px;
        //   line-height: 54px;
        //   color: #409eff;
        // }
        // .division {
        //   width: 100%;
        //   height: 1px;
        //   background: #d1d3d5;
        //   margin-top: 30px;
        // }
        .sub {
          width: 100%;
          font-size: 14px;
          line-height: 28px;
          font-weight: 300;
        }
      }
    }
  }
}
</style>

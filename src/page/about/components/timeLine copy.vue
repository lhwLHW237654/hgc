<template>
  <div class="timeLine">
    <div class="title">
      <span class="text">{{ $t("about.timeline.title") }}</span>
    </div>
    <!-- <div class="anchor c" v-smooth="'horizontal'">
      <span v-for="(item, index) in data" @click.prevent="scrollToElement('history' + item.id)" class="link pr">
        {{ dayjs(item.time).format("YYYY") }}
        <div class="bar" v-if="index !== data.length - 1" />
      </span>
    </div> -->
    <div class="line f" ref="lineRef">
      <div class="box fc" v-for="(item, index) in data" :key="index" :id="'history' + item.id">
        <div class="time">{{ dayjs(item.time).format("YYYY") }}</div>
        <div class="division"></div>
        <div class="sub">{{ item.sub[locale] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import Lenis from "lenis";
import dayjs from "dayjs";

const data = defineModel();
const lineRef = ref(null);

const lenis = ref(null);

onMounted(() => {
  lenis.value = new Lenis({
    orientation: "horizontal",
    gestureOrientation: "both",
    wrapper: lineRef.value,
  });

  function raf(time) {
    lenis.value.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

function scrollToElement(id) {
  const targetElement = document.getElementById(id);
  if (targetElement && lenis.value) {
    const targetPosition = targetElement.offsetLeft;
    lenis.value.scrollTo(targetPosition, 0, 1000); // 假设API：scrollTo(x, y, duration)
  }
}
</script>

<style lang="scss" scoped>
.timeLine {
  background-color: #f1f3f5;
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
  .anchor {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    .link {
      font-size: 24px;
      line-height: 29px;
      color: #707579;
      width: 60px;
      margin-right: 70px;
      cursor: pointer;
      .bar {
        position: absolute;
        width: 40px;
        height: 1px;
        top: 50%;
        left: 75px;
        border-bottom: 1px dashed #ced3d8;
      }
    }
  }
  .anchor::-webkit-scrollbar {
    height: 0 !important;
  }
  .line {
    overflow: auto;
    .box {
      margin: 20px;
      background-color: #ffffff;
      padding: 20px;
      .time {
        font-size: 44px;
        line-height: 54px;
        color: #409eff;
      }
      .division {
        width: 100%;
        height: 1px;
        background: #d1d3d5;
        margin-top: 30px;
      }
      .sub {
        width: 400px;
        font-size: 14px;
        line-height: 28px;
        font-weight: 300;
        margin-top: 30px;
      }
    }
  }
  .line::-webkit-scrollbar {
    height: 0 !important;
  }
}
</style>

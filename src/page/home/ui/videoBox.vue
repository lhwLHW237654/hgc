<template>
  <div class="videoBox" v-show="delayShow">
    <div class="title" :style="titleStyle">
      <span>{{ $t("videoBox.title") }}</span>
    </div>
    <div class="main c" :style="{ paddingTop: data.title.titleBottom }">
      <videoPlay v-bind="data.options" />
    </div>
  </div>
</template>

<script setup>
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue3-video-play";

const titleStyle = computed(() => ({
  fontSize: data.value.title.size,
  fontWeight: data.value.title.weight,
}));

const data = defineModel();

const delayShow = ref(false);
onMounted(() => {
  nextTick(() => {
    delayShow.value = true;
  });
});
</script>

<style lang="scss" scoped>
.videoBox {
  .title {
    margin: 10px;
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
  .main {
    width: 100%;
  }
}
:deep(.d-player-wrap) {
  border-radius: 6px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>

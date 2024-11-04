<template>
  <div>
    <el-dialog v-model="dialogVisible" width="80%" top="5vh">
      <div class="newsContent" @wheel.stop>
        <h2 class="title">
          {{ props.data.title[locale] }}
        </h2>
        <p>{{ dayjs(props.data.time).format("YYYY-MM-DD") }}</p>
        <div v-html="props.data.sub[locale]"></div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import dayjs from "dayjs";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const dialogVisible = defineModel();
const props = defineProps(["data"]);
</script>
<style lang="scss">
.newsContent {
  padding: 20px;
  margin-bottom: 15px;
  height: 80vh;
  overflow-y: auto;

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  p {
    line-height: 24px;
  }
}
</style>

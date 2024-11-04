<template>
  <el-image src="https://files.catbox.moe/sik5cg.png" class="test" fit="cover"></el-image>
  <div class="QE">
    <infoBox v-model="info" />
  </div>
</template>

<script setup>
import infoBox from "./components/infoBox.vue";

const info = ref({
  background: "https://files.catbox.moe/4833lo.gif",
  x: "0%",
  width: "50vw",
  size: "20px",
  weight: 400,
  lineHeight: "50px",
  text: {
    zh: "公司建立了完善的质量体系管理体系，管理人员和技术人员均具有相应的专业知识及工作经验，能在各项管理中履行各自的职责；能够按照GMP要求组织生产和进行产品质量控制。 从原料采购、入库检验、生产、质检、成品放行到运输、售后服务，实施了严格的管理措施，确保了产品的高品质、及可追溯性。",
    en: "The company has established a sound quality management system, and management and technical personnel have corresponding professional knowledge and work experience, and can perform their respective duties in various management; can organize production and product quality control in accordance with GMP requirements. From raw material procurement, warehousing inspection, production, quality inspection, finished product release to transportation, after-sales service, strict management measures have been implemented to ensure the high quality and traceability of the products.",
  },
});
</script>

<style lang="scss" scoped>
.test {
  height: 30vh;
  width: 100%;
}
.QE {
}
</style>

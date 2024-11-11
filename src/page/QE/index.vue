<template>
  <el-image src="https://files.catbox.moe/sik5cg.png" class="test" fit="cover"></el-image>
  <div class="QE">
    <infoBox v-model="info" />
  </div>
</template>

<script setup>
import infoBox from "./components/infoBox.vue";

onMounted(() => {
  getViewStyle();
});

async function getViewStyle() {
  const { data } = await $axios.get("/index/getDataApi");
  let qualityData = JSON.parse(data.qualityData);
  info.value.text = qualityData;
}

const info = ref({
  background: "https://files.catbox.moe/4833lo.gif",
  x: "0%",
  width: "50vw",
  size: "20px",
  weight: 400,
  lineHeight: "50px",
  text: {
    zh: "",
    en: "",
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

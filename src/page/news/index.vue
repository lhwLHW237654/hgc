<template>
  <el-image src="https://files.catbox.moe/sik5cg.png" class="test" fit="cover"></el-image>
  <div class="news">
    <newsBox v-model="companyList" title="newsBox.title" />
    <newsBox v-model="industryList" title="newsBox.industry" />
  </div>
</template>

<script setup>
import newsBox from "./components/newsBox.vue";

onMounted(() => {
  getViewStyle();
});

async function getViewStyle() {
  const { data } = await $axios.get("/index/getDataApi");
  let consultData = JSON.parse(data.consult);
  companyList.value = consultData.map((item) => ({
    title: {
      zh: item.titleZH,
      en: item.titleEN,
    },
    sub: {
      zh: item.contentZH,
      en: item.titlecontentENZH,
    },
    url: item.url,
    time: item.time,
  }));
}

const companyList = ref([]);

const industryList = ref([]);
</script>

<style lang="scss" scoped>
.test {
  height: 30vh;
  width: 100%;
}
</style>

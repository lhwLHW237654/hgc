<template>
  <el-image src="https://files.catbox.moe/sik5cg.png" class="test" fit="cover"></el-image>
  <div class="recruitment">
    <div class="title">
      <span>{{ $t("menu.recruitment") }}</span>
    </div>
    <div class="main f w">
      <div class="item f jb ac" v-for="(item, index) in info" :key="index" @click="open(item)">
        <div class="fc">
          <h3>{{ item.title[locale] }}</h3>
          <span>{{ $t("recruitment.number") }} : {{ item.number }}</span>
        </div>
        <i-preview-open theme="outline" size="24" fill="#409EFF" />
      </div>
    </div>
  </div>
  <el-dialog v-model="showDetails" :title="details.title[locale]">
    <div v-html="details.sub[locale]"></div>
  </el-dialog>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

onMounted(() => {
  getViewStyle();
});

async function getViewStyle() {
  const { data } = await $axios.get("/index/getDataApi");
  let recruitment = JSON.parse(data.recruitment);
  info.value = recruitment;
}

const info = ref([]);

const details = ref({
  title: {
    zh: "",
    en: "",
  },
  number: 0,
  sub: "",
});

const showDetails = ref(false);

function open(item) {
  details.value = item;
  showDetails.value = true;
}
</script>

<style lang="scss" scoped>
.test {
  height: 30vh;
  width: 100%;
}
.recruitment {
  height: 80vh;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #fafafa;
  .title {
    width: 80%;
    font-size: 36px;
    font-weight: 800;
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
    margin-top: 50px;
    .item {
      background-color: #fff;
      border-radius: 4px;
      padding: 20px;
      transition: all 0.3s;
      width: 300px;
      &:hover {
        cursor: pointer;
        box-shadow: 0 4px 20px #ccc;
        transform: scale(1.05);
      }
    }
  }
}
</style>

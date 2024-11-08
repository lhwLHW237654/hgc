<template>
  <companyInfo v-model="info" />
  <productionBase v-model="productionBaseData" />
  <timeLine v-model="timeData" />
  <culture v-model="cultureList" />
  <honorBox v-model="honorList" />
  <pictureBox v-model="pictureList" />
</template>

<script setup>
import companyInfo from "./components/companyInfo.vue";
import productionBase from "./components/productionBase.vue";
import timeLine from "./components/timeLine.vue";
import culture from "./components/culture.vue";
import honorBox from "./components/honorBox.vue";
import pictureBox from "./components/pictureBox.vue";

onMounted(() => {
  getViewStyle();
});

async function getViewStyle() {
  const { data } = await $axios.get("/index/getDataApi");
  let companyData = JSON.parse(data.company);
  let honorData = JSON.parse(data.honor);
  let courseData = JSON.parse(data.course);
  let baseData = JSON.parse(data.base);
  let cultureData = JSON.parse(data.culture);
  let styleData = JSON.parse(data.style);

  //公司简介
  info.value.image.url = companyData.url;
  info.value.text.en = companyData.englishText;
  info.value.text.zh = companyData.chineseText;

  //发展历程
  timeData.value = courseData;

  //生产基地
  productionBaseData.value.text.zh = baseData.chineseText;
  productionBaseData.value.text.en = baseData.englishText;
  let url = baseData.url.map((item) => {
    return item.url;
  });
  productionBaseData.value.imageList = url;

  //企业风貌
  pictureList.value = styleData.map((item) => ({
    title: {
      zh: item.titleZH,
      en: item.titleEN,
    },
    url: item.url,
  }));

  //荣誉资质
  honorList.value = honorData.map((item) => ({
    title: {
      zh: item.titleZH,
      en: item.titleEN,
    },
    url: item.url,
  }));

  cultureList.value = cultureData.map((item) => ({
    title: {
      zh: item.titleZH,
      en: item.titleEN,
    },
    sub: {
      zh: item.contentZH,
      en: item.contentEN,
    },
    url: item.url,
  }));
}
const info = ref({
  background: "https://files.catbox.moe/ffubxy.png",
  image: {
    width: "40%",
    height: "auto",
    url: "https://files.catbox.moe/2yjgu2.jpg",
    fit: "cover",
  },
  x: "0%",
  width: "50vw",
  size: "20px",
  weight: 400,
  lineHeight: "50px",
  text: {
    zh: `<p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 16px;">安徽晶诚生物科技有限公司，位于安徽省淮北市。我们致力于利用先进的生物技术及化学合成技术，研发和生产高品质的医药中间体、氨基酸类保健品原料及化妆品原料等产品。 </span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 16px;">公司目前拥有两个生产基地，总占地170多亩，建有多个化学合成车间、生物发酵车间以及符合GMP标准的精、烘、包车间，具有多系列产品的生产能力，产品质量符合EP/USP/AJI/FCC等各种现行国内外标准。 公司还建有5200平方综合研发中心（包含生物发酵实验室、化学合成实验室及检测中心），为公司的发展提供良好的技术支持和质量保证，并先后通过了ISO9001质量管理体系、FSSC22000、KOSHER、HALAL等国际认证。 </span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 16px;">未来，晶诚生物将继续专注于健康产品领域。我们坚持“质量第一，客户至上”的原则……</span></p>`,
    en: `<p style="text-indent: 2em; line-height: 2;">Located in Huaibei City of Anhui Province, Synova Biotech Co., Ltd. is committed to the research, development and production of high-quality pharmaceutical intermediates, amino acid health care product raw materials and cosmetic raw materials by using advanced biotechnologies and chemical synthesis technologies. </p><p style="text-indent: 2em; line-height: 2;">At present, our company has two production bases and a total area of ​​more than 113,390 square meters. With several chemical synthesis plants, biological fermentation plants, and GMP-compliant refining, baking, and packaging plants, our company has the production capacity for multiple series of products, and the product quality of our products complies with various current domestic and international standards such as EP/USP/AJI/FCC.</p>`,
  },
  card: [
    {
      icon: "i-building-one",
      title: {
        zh: "2014年",
        en: "2014 Year",
      },
      text: {
        zh: "公司成立",
        en: "Company established",
      },
    },
    {
      icon: "i-texture",
      title: {
        zh: "170+亩",
        en: "170+ mu",
      },
      text: {
        zh: "总占地面积",
        en: "Total land area",
      },
    },
    {
      icon: "i-flask",
      title: {
        zh: "5200 ㎡",
        en: "5200 ㎡",
      },
      text: {
        zh: "综合研发中心面积",
        en: "Comprehensive R&D center area",
      },
    },
    {
      icon: "i-diamond",
      title: {
        zh: "ISO9001",
        en: "ISO9001",
      },
      text: {
        zh: "质量体系认证",
        en: "Quality system certification",
      },
    },
  ],
});

const productionBaseData = ref({
  text: {
    zh: "",
    en: "",
  },
  imageList: [],
});

const timeData = ref([]);

const cultureList = ref([]);

const honorList = ref([]);

const pictureList = ref([]);
</script>

<style lang="scss" scoped>
.about {
  padding-bottom: 60px;
}
</style>

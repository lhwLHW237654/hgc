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
  console.log("%c Line:29 🌶 cultureData", "background:#e41a6a", cultureData);
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

  //企业文化
  // cultureList.value = cultureData.map((item)=>{
  //   title: {
  //     zh: item.titleZH,
  //     en: item.titleEN,
  //   },
  //   sub: {
  //     zh: item.contentZH,
  //     en: item.contentEN,
  //   },
  // })

  //荣誉资质
  // list.value[2].data.qualification = honorData.map((item) => {
  //   return {
  //     url: item.url,
  //     background: "#fff",
  //     fontStyle: {
  //       size: "16px",
  //       weight: 400,
  //       margin: "20px",
  //       text: {
  //         zh: item.titleZH,
  //         en: item.titleEN,
  //       },
  //     },
  //     animation: {
  //       classes: "fadeIn",
  //       delay: 0,
  //       duration: 1000,
  //       iteration: 0,
  //     },
  //   };
  // });
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

const cultureList = ref([
  {
    title: {
      zh: "企业愿景",
      en: "Enterprise Vision",
    },
    sub: {
      zh: "成为全球领先的健康产品解决方案提供商，通过不断的技术革新和工艺改进，推动整个行业向更高的环保和可持续发展标准迈进",
      en: "To become a global leader in health product solutions, driving the entire industry to higher environmental and sustainable development standards through continuous technological innovation and process improvement",
    },
    url: "https://innolcon.com/cp/html/images/1666247456.png",
  },
  {
    title: {
      zh: "企业使命",
      en: "Enterprise Mission",
    },
    sub: {
      zh: "利用先进的技术和创新工艺，生产高品质的健康产品，帮助客户提高效率和竞争力，同时减少对环境的影响，为实现可持续发展做出贡献",
      en: "To produce high-quality health products using advanced technology and innovative processes, helping customers improve efficiency and competitiveness while reducing environmental impact and contributing to sustainable development",
    },
    url: "https://cdn.pixabay.com/photo/2017/06/04/20/48/vision-2372177_1280.jpg",
  },
  {
    title: {
      zh: "企业价值观",
      en: "Enterprise Vision",
    },
    sub: {
      zh: "创新、质量、环保、合作、责任",
      en: "Innovation, Quality, Environmental Protection, Cooperation, Responsibility",
    },
    url: "https://cdn.pixabay.com/photo/2021/10/25/08/55/nature-6740243_640.jpg",
  },
  {
    title: {
      zh: "企业精神",
      en: "Enterprise Vision",
    },
    sub: {
      zh: "发展生物技术，共创健康未来",
      en: "Developing biotechnology to create a healthy future together.",
    },
    url: "https://cdn.pixabay.com/photo/2014/10/05/06/16/windrader-474576_640.jpg",
  },
  {
    title: {
      zh: "企业宗旨",
      en: "Enterprise Vision",
    },
    sub: {
      zh: "为社会创造价值、推动行业进步、实现共赢",
      en: "Creating value for society, promoting industry progress, and achieving win-win results",
    },
    url: "https://cdn.pixabay.com/photo/2020/03/16/14/58/family-4937226_640.jpg",
  },
  {
    title: {
      zh: "企业环保理念",
      en: "Enterprise Vision",
    },
    sub: {
      zh: "可持续生产、绿色创新、社会责任",
      en: "Sustainable production, green innovation, social responsibility",
    },
    url: "https://files.catbox.moe/bbsg7u.jpg",
  },
]);

const honorList = ref([
  {
    title: {
      zh: "ISO9001 证书",
      en: "ISO9001 Certificate",
    },
    url: "https://files.catbox.moe/fl4mfw.jpg",
  },
  {
    title: {
      zh: "KOSHER 证书",
      en: "KOSHER Certificate",
    },
    url: "https://files.catbox.moe/27x5vz.png",
  },
  {
    title: {
      zh: "KOSHER 证书",
      en: "KOSHER Certificate",
    },
    url: "https://files.catbox.moe/ginxwp.png",
  },
  {
    title: {
      zh: "KOSHER 证书",
      en: "KOSHER Certificate",
    },
    url: "https://files.catbox.moe/8obfr2.png",
  },
  {
    title: {
      zh: "KOSHER 证书",
      en: "KOSHER Certificate",
    },
    url: "https://files.catbox.moe/nqexvc.png",
  },
  {
    title: {
      zh: "KOSHER 证书",
      en: "KOSHER Certificate",
    },
    url: "https://files.catbox.moe/ul2eb0.png",
  },
  {
    title: {
      zh: "KOSHER 证书",
      en: "KOSHER Certificate",
    },
    url: "https://files.catbox.moe/q7bgm5.png",
  },
  {
    title: {
      zh: "HALAL 证书",
      en: "HALAL Certificate",
    },
    url: "https://files.catbox.moe/chxa80.png",
  },
  {
    title: {
      zh: "HALAL 证书",
      en: "HALAL Certificate",
    },
    url: "https://files.catbox.moe/pi9e2h.png",
  },
]);

const pictureList = ref([
  //=====
  {
    title: {
      zh: "工厂风貌",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/2yjgu2.jpg",
  },
  {
    title: {
      zh: "工厂风貌",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/99alhk.jpg",
  },
  {
    title: {
      zh: "工厂风貌",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/zv4obk.jpg",
  },
  {
    title: {
      zh: "工厂风貌",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/krj8yt.jpg",
  },
  {
    title: {
      zh: "工厂风貌",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/gjbhpw.jpg",
  },
  {
    title: {
      zh: "工厂风貌",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/7ywxm6.jpg",
  },
  //=====
  {
    title: {
      zh: "办公区域",
      en: "Gate",
    },
    url: "https://files.catbox.moe/kmy7x6.jpg",
  },
  //====
  {
    title: {
      zh: "实验室",
      en: "Laboratory",
    },
    url: "https://files.catbox.moe/sucaou.jpg",
  },
  {
    title: {
      zh: "实验室",
      en: "Laboratory",
    },
    url: "https://files.catbox.moe/hv8ini.jpg",
  },
  {
    title: {
      zh: "实验室",
      en: "Laboratory",
    },
    url: "https://files.catbox.moe/tx8d9z.jpg",
  },
  //========
  {
    title: {
      zh: "生产车间",
      en: "Gate",
    },
    url: "https://files.catbox.moe/ajqt1p.jpg",
  },
  {
    title: {
      zh: "生产车间",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/wkyma3.jpg",
  },
  {
    title: {
      zh: "生产车间",
      en: "Corporate Style",
    },
    url: "https://files.catbox.moe/kyfoqr.jpg",
  },
  //====
  {
    title: {
      zh: "仓库",
      en: "Warehouse",
    },
    url: "https://files.catbox.moe/zgi9u7.jpg",
  },
  {
    title: {
      zh: "仓库",
      en: "Warehouse",
    },
    url: "https://files.catbox.moe/chjjpy.jpg",
  },
]);
</script>

<style lang="scss" scoped>
.about {
  padding-bottom: 60px;
}
</style>

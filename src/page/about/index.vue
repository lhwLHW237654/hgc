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
    zh: "安徽晶诚生物科技有限公司目前拥有两个主要生产基地，其位于安徽省淮北市，两个生产基地间隔50多千米，共有3个发酵车间和6条精制生产线，通过采用先进的生产技术和工艺，努力实现生产过程的绿色化；并设有先进设备的标准化实验室，包括菌种优化设备、产品高效分离设备、高效液相色谱和气相色谱等精密检测仪器，确保我们的产品满足CP/USP/EP/AJI等多种质量标准。",
    en: "Anhui Synova Biotech Co., Ltd. currently has two main production bases, located in Huaibei City, Anhui Province. The two production bases are more than 50 kilometers apart, with a total of 3 fermentation workshops and 6 refining production lines. By adopting advanced production technology and processes, we strive to achieve the greening of the production process; and have a standardized laboratory with advanced equipment, including strain optimization equipment, product efficient separation equipment, high-performance liquid chromatography and gas chromatography and other precision testing instruments, to ensure that our products meet CP/USP/EP/AJI and other quality standards.",
  },
  imageList: ["https://files.catbox.moe/d3k82b.png", "https://files.catbox.moe/cm7r4u.jpg"],
});

const timeData = ref([
  {
    id: 1,
    time: 953404800000, // 2000-03-15
    sub: {
      zh: "公司成立，初步建立了生产基地，并成功开发了第一代高效催化剂，",
      en: "The company was established, the production base was initially established, and the first generation of efficient catalysts was successfully developed,",
    },
  },
  {
    id: 2,
    time: 1058880000000, // 2003-07-22
    sub: {
      zh: "公司首次对外扩展，通过与国外化工企业的合作，引进了先进的生产技术和管理经验，显著提高了产品的国际市场竞争力。此举标志着公司开始进入快速发展阶段。",
      en: "For the first time, the company expanded internationally through cooperation with foreign chemical companies, introducing advanced production technology and management experience, significantly enhancing the international competitiveness of its products. This marked the beginning of the company's rapid development phase.",
    },
  },
  {
    id: 3,
    time: 1196390400000, // 2007-11-30
    sub: {
      zh: "公司重视环保责任，开发了一系列环保型化工产品，并成功应用于多个领域，如新能源、水处理等，这些创新产品有效减少了生产过程中的污染物排放，提升了公司在行业内的环保形象。",
      en: "The company emphasized its environmental responsibility by developing a series of eco-friendly chemical products successfully applied in various fields, such as new energy and water treatment. These innovative products effectively reduced pollutant emissions during production, enhancing the company's environmental image within the industry.",
    },
  },
  {
    id: 4,
    time: 1337145600000, // 2012-05-16
    sub: {
      zh: "公司通过多年的技术积累和市场拓展，成功上市，募集的资金进一步用于研发和扩大生产规模。上市后，公司加大了对外合作力度，与多家顶尖科研机构建立了长期合作关系。为公司后续的发展奠定了技术基础。这一时期，公司主要专注于研发，力求在化工领域内实现技术突破。",
      en: "Through years of technological accumulation and market expansion, the company successfully went public, with the funds raised further used for R&D and production scale expansion. After listing, the company intensified its external cooperation, establishing long-term relationships with top scientific research institutions, laying a technical foundation for its subsequent development. During this period, the company focused primarily on R&D, striving for technological breakthroughs in the chemical industry.",
    },
  },
  {
    id: 5,
    time: 1473302400000, // 2016-09-08
    sub: {
      zh: "公司在安全生产方面取得显著成就，成功开发了一系列安全生产技术和管理体系，大幅降低了生产事故率，为公司的持续健康发展提供了坚实保障。",
      en: "The company made significant achievements in production safety, successfully developing a series of safety production technologies and management systems, substantially reducing the rate of production accidents, providing a solid guarantee for the company's continuous and healthy development.",
    },
  },
  {
    id: 6,
    time: 1587360000000, // 2020-04-20
    sub: {
      zh: "面对全球气候变化的挑战，公司积极响应，推出了碳中和战略，通过技术创新和生产过程优化，实现了生产活动的低碳化，赢得了国内外市场的广泛认可。",
      en: "In response to the challenge of global climate change, the company actively launched a carbon neutrality strategy. Through technological innovation and optimization of production processes, it achieved the decarbonization of its production activities, winning wide recognition in domestic and international markets.",
    },
  },
  {
    id: 7,
    time: 1702819200000, // 2024-01-15
    sub: {
      zh: "公司庆祝成立24周年，回顾过去的成就，展望未来的发展。目前，公司已经成为国内外知名的化工企业，产品远销海外多个国家和地区，公司致力于成为全球化工行业的领导者。",
      en: "The company celebrates its 24th anniversary, reflecting on past achievements and looking forward to future development. Currently, the company has become a well-known chemical enterprise both domestically and internationally, with products exported to many countries and regions overseas. The company is committed to becoming a leader in the global chemical industry.",
    },
  },
]);

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

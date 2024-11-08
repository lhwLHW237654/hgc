<template>
  <component
    v-for="(item, index) in list"
    :key="index"
    :is="loadComponent(item)"
    v-model="item.data"
    :style="getStyle(item)"
    v-animate-css="item.data.animation"></component>
</template>

<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  getViewStyle();
});

async function getViewStyle() {
  const { data } = await $axios.get("/index/getDataApi");
  let carouselData = JSON.parse(data.carousel);
  let companyData = JSON.parse(data.company);
  let honorData = JSON.parse(data.honor);
  let consultData = JSON.parse(data.consult);
  let imgText = [
    {
      zh: `<p style="text-indent: 2em; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>晶诚生物</strong></span></p><p style="text-indent: 2em; line-height: 1.15;"><span style="color: rgb(0, 49, 125);">Synova. Biotech</span></p><p style="text-indent: 2em; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>精心制造健康生活</strong></span></p><p style="text-indent: 2em; line-height: 1.15;"><span style="color: rgb(0, 49, 125);">Manufacturing Healthy Life</span></p><p style="text-indent: 2em; line-height: 2;"><br></p>`,
      en: `<p><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>Synova. Biotech</strong></span></p><p><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>Manufacturing Healthy Life</strong></span></p>`,
    },
    {
      zh: `<p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>专业酶法、发酵法及化学合成技术的氨基酸生产厂家</strong></span></p><p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 19px;"><strong>Amino acid manufacturer specializing in enzyme, fermentation and chemical synthesis technologies</strong></span></p><p style="text-indent: 2em; line-height: 1.15;"><br></p>`,
      en: `<p><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>Amino acid manufacturer specializing in enzyme, fermentation and chemical synthesis technologies</strong></span></p>`,
    },
    {
      zh: `<p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>立足于专业能力 专注于品质服务</strong></span></p><p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 19px;"><strong>Based on professional ability &nbsp;focus on quality service</strong></span></p><p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 64px;"><strong>不懈创新 不断发展</strong></span></p><p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 19px;"><strong>unremitting innovation &nbsp;continuous development</strong></span></p><p style="text-indent: 2em; line-height: 1.15;"><br></p>`,
      en: `<p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 48px;"><strong>Based on professional ability, focus on quality service</strong></span></p><p style="text-indent: 2em; text-align: center; line-height: 1.15;"><span style="color: rgb(0, 49, 125); font-size: 48px;"><strong>unremitting innovation, continuous development</strong></span></p>`,
    },
  ];
  list.value[0].data.imgList = carouselData.map((item, index) => {
    let imgConfig = {
      url: item.url,
      title: imgText[index] || '',
      align: "left",
      path: "/productItem?id=1",
    };
    return imgConfig;
  });

  list.value[1].data.content.image.url = companyData.url;
  list.value[1].data.content.textBox.text.en = companyData.englishText;
  list.value[1].data.content.textBox.text.zh = companyData.chineseText;

  list.value[2].data.qualification = honorData.map((item) => {
    return {
      url: item.url,
      background: "#fff",
      fontStyle: {
        size: "16px",
        weight: 400,
        margin: "20px",
        text: {
          zh: item.titleZH,
          en: item.titleEN,
        },
      },
      animation: {
        classes: "fadeIn",
        delay: 0,
        duration: 1000,
        iteration: 0,
      },
    };
  });

  list.value[3].data.newsList = consultData.map((item) => {
    console.log("%c Line:75 🥚 item", "background:#ea7e5c", item);
    return {
      title: {
        zh: item.titleZH,
        en: item.titleEN,
      },
      sub: {
        zh: item.contentZH,
        en: item.contentEN,
      },
      url: item.url,
      time: item.time,
    };
  });
}
function loadComponent(item) {
  return defineAsyncComponent({
    loader: () => import(`./ui/${item.component}.vue`),
    delay: 0,
  });
}
function getStyle(item) {
  const data = {
    height: item.height,
    padding: `${item.padding.top} ${item.padding.right} ${item.padding.bottom} ${item.padding.left}`,
  };
  if (item.background && item.background.includes("http")) {
    data.background = `url(${item.background})`;
  } else {
    data.background = item.background;
  }
  return data;
}

const list = ref([
  {
    component: "carousel",
    height: "auto",
    padding: {
      top: "0px",
      bottom: "0px",
      left: "0px",
      right: "0px",
    },
    background: "#fffff",
    data: {
      options: {
        height: "850px",
        trigger: "hover", //'hover' | 'click'//指示器的触发方式
        autoplay: true, //是否自动切换
        interval: 3000, //自动切换的时间间隔，单位为毫秒
        indicatorPosition: "", //'none' | 'outside' 指示器的位置
        arrow: "always", //'never' | 'always' | 'hover' 切换箭头的显示时机
        type: "", //'card' 轮播图的类型
        cardScale: 0.8, //当 type 为 card时，二级卡的缩放大小
        loop: true, //是否循环显示
        direction: "horizontal", //'horizontal' | 'vertical' 展示的方向
        pauseOnHover: true, //鼠标悬浮时暂停自动切换
        motionBlur: true, //是否开启切换时的动画模糊效果
      },
      animation: {
        classes: "fadeInDown",
        delay: 0,
        duration: 1000,
        iteration: 0,
      },
    },
  },
  {
    component: "companyInfo",
    height: "auto",
    padding: {
      top: "100px",
      bottom: "100px",
      left: "20px",
      right: "20px",
    },
    background: "https://files.catbox.moe/ffubxy.png",
    data: {
      animation: {
        classes: "fadeInDown",
        delay: 0,
        duration: 1000,
        iteration: 0,
      },
      title: {
        size: "36px",
        weight: 800,
        titleBottom: "50px",
      },
      content: {
        width: "80vw",
        height: "30vh",
        image: {
          width: "40%",
          height: "400px",
          url: "https://files.catbox.moe/2yjgu2.jpg",
          fit: "cover",
        },
        textBox: {
          width: "60%",
          size: "16px",
          weight: 300,
          lineHeight: "40px",
          color: "333436",
          text: {
            zh: `<p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 16px;">安徽晶诚生物科技有限公司，位于安徽省淮北市。我们致力于利用先进的生物技术及化学合成技术，研发和生产高品质的医药中间体、氨基酸类保健品原料及化妆品原料等产品。 </span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 16px;">公司目前拥有两个生产基地，总占地170多亩，建有多个化学合成车间、生物发酵车间以及符合GMP标准的精、烘、包车间，具有多系列产品的生产能力，产品质量符合EP/USP/AJI/FCC等各种现行国内外标准。 公司还建有5200平方综合研发中心（包含生物发酵实验室、化学合成实验室及检测中心），为公司的发展提供良好的技术支持和质量保证，并先后通过了ISO9001质量管理体系、FSSC22000、KOSHER、HALAL等国际认证。 </span></p><p style="text-indent: 2em; line-height: 2;"><span style="color: rgb(0, 0, 0); font-size: 16px;">未来，晶诚生物将继续专注于健康产品领域。我们坚持“质量第一，客户至上”的原则……</span></p>`,
            en: `<p style="text-indent: 2em; line-height: 2;">Located in Huaibei City of Anhui Province, Synova Biotech Co., Ltd. is committed to the research, development and production of high-quality pharmaceutical intermediates, amino acid health care product raw materials and cosmetic raw materials by using advanced biotechnologies and chemical synthesis technologies. </p><p style="text-indent: 2em; line-height: 2;">At present, our company has two production bases and a total area of ​​more than 113,390 square meters. With several chemical synthesis plants, biological fermentation plants, and GMP-compliant refining, baking, and packaging plants, our company has the production capacity for multiple series of products, and the product quality of our products complies with various current domestic and international standards such as EP/USP/AJI/FCC.</p>`,
          },
        },
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
    },
  },
  {
    component: "honorsBox",
    height: "auto",
    padding: {
      top: "100px",
      bottom: "100px",
      left: "200px",
      right: "200px",
    },
    background: "#F1F3F5",
    data: {
      animation: {
        classes: "fadeInDown",
        delay: 0,
        duration: 1000,
        iteration: 0,
      },
      title: {
        size: "36px",
        weight: 800,
        titleBottom: "50px",
      },
      qualification: [
        {
          url: "https://files.catbox.moe/izht4e.png",
          background: "#fff",
          fontStyle: {
            size: "16px",
            weight: 400,
            margin: "20px",
            text: {
              zh: "ISO9001 质量管理体系认证",
              en: "ISO9001 Quality Management System Certification",
            },
          },
          animation: {
            classes: "fadeIn",
            delay: 0,
            duration: 1000,
            iteration: 0,
          },
        },
        {
          url: "https://files.catbox.moe/9gex2r.png",
          background: "#fff",
          fontStyle: {
            size: "16px",
            weight: 400,
            margin: "20px",
            text: {
              zh: "KOSHER 犹太洁食认证",
              en: "KOSHER Certification",
            },
          },
          animation: {
            classes: "fadeIn",
            delay: 0,
            duration: 1000,
            iteration: 0,
          },
        },
        {
          url: "https://files.catbox.moe/imr8vt.png",
          background: "#fff",
          fontStyle: {
            size: "16px",
            weight: 400,
            margin: "20px",
            text: {
              zh: "HALAL 清真认证",
              en: "HALAL Certification",
            },
          },
          animation: {
            classes: "fadeIn",
            delay: 0,
            duration: 1000,
            iteration: 0,
          },
        },
      ],
      honors: [
        {
          zh: "“2020中国企业500强”位列第215位（所属原集团）",
          en: "Ranked 215th in the 2020 China Top 500 Enterprises (belonging to the original group)",
        },
        {
          zh: "“2020中国服务业企业500强”位列第86位（所属原集团）",
          en: "Ranked 86th in the 2020 China Top 500 Service Enterprises (belonging to the original group)",
        },
        { zh: "荣膺国务院“全国就业先进企业”", en: "Honored as a National Advanced Employment Enterprise by the State Council" },
        {
          zh: "荣膺人社部“全国人力资源诚信服务示范机构”",
          en: "Honored as a National Model Institution for Honest Human Resource Services by the Ministry of Human Resources and Social Security",
        },
        {
          zh: "淮北外企人民调解委员会获评司法部“全国模范人民调解委员会”",
          en: "Huai Bei Foreign Enterprise People's Mediation Committee was awarded as a National Model People's Mediation Committee by the Ministry of Justice",
        },
        { zh: "荣膺“淮北高校毕业生就业百佳用人单位”", en: "Honored as one of the Top 100 Employers for Graduates of Huai Bei Universities" },
        { zh: "荣膺“淮北市构建和谐劳动关系先进单位”", en: "Honored as an Advanced Unit in Building Harmonious Labor Relations in Huai Bei City" },
        { zh: '荣膺书香淮北系列评选"书香企业"', en: 'Honored as a "Bookish Enterprise" in the Bookish Huai Bei series selection' },
        { zh: "荣膺2008年淮北奥运会、残奥会先进单位", en: "Honored as an Advanced Unit for the 2008 Huai Bei Olympic Games and Paralympic Games" },
        { zh: "荣膺2015年世界田径锦标赛首席国内合作伙伴", en: "Honored as the Leading Domestic Partner for the 2015 World Athletics Championships" },
        {
          zh: "荣膺中国奥林匹克委员会奥运会备战办战略合作伙伴",
          en: "Honored as a Strategic Partner for the Chinese Olympic Committee's Olympic Games Preparatory Office",
        },
        { zh: "多次获评“全国质量信得过单位”", en: "Repeatedly awarded as a National Trusted Quality Unit" },
        { zh: "荣获“亚太人力资源领军企业奖”", en: "Awarded the Asia-Pacific Leading Human Resources Enterprise Award" },
        { zh: "三度蝉联“中国最受尊敬企业”", en: "Three-time consecutive winner of the Most Respected Enterprise in China" },
        { zh: "获评“2018年度中国最具影响力企业”", en: "Awarded the Most Influential Enterprise in China for 2018" },
        { zh: "获评“2019品牌强国·年度影响力企业", en: "Awarded the 2019 Brand Powerhouse Annual Influential Enterprise" },
      ],
    },
  },
  {
    component: "newsBox",
    height: "auto",
    padding: {
      top: "100px",
      bottom: "100px",
      left: "200px",
      right: "200px",
    },
    background: "https://www.delixi-electric.com/r/cms/delixi/newdelixi/images/bg01.jpg",
    data: {
      animation: {
        classes: "fadeInDown",
        delay: 0,
        duration: 1000,
        iteration: 0,
      },
      title: {
        size: "36px",
        weight: 800,
        titleBottom: "50px",
      },
      newsList: [
        {
          title: {
            zh: "安徽晶诚生物 CPHI China 2023 展位号：N2G95",
            en: "Synova. Biotech CPHI China 2023 Booth No.: N2G95",
          },
          sub: {
            zh: '2023年6月19-21日，"第二十一届世界制药原料中国展"(CPHI China 2023)将在上海举办，届时将带领我公司专业技术团队参展，展位号N2G95，欢迎各位新老客户莅临指导!',
            en: "From June 19th to 21st, 2023, the 21st World Pharmaceutical Raw Materials China Exhibition (CPHI China 2023) will be held in Shanghai. At that time, our company's professional technical team will participate in the exhibition, booth number N2G95, welcome new and old customers to visit and guide!",
          },
          url: "https://files.catbox.moe/b4zl1c.jpg",
          time: 1725934998005,
        },
        {
          title: {
            zh: "公司现已整体通过ISO9001质量体系认证和ISO14001环境体系认证，并获得KOSHER认证。",
            en: "The company has now achieved the overall certification of ISO9001 Quality Management System and ISO14001 Environmental Management System, and has obtained KOSHER certification.",
          },
          sub: {
            zh: "公司近日宣布取得了ISO9001质量体系认证和ISO14001环境体系认证，标志着公司在质量管理和环境保护方面取得了重要进展。同时，公司还荣获KOSHER认证，这一认证标志着公司产品符合犹太教教规的饮食法律要求，为公司产品的国际市场拓展提供了有力支持。这些认证的取得将进一步巩固公司在行业中的地位，并展现了公司对于质量、环境和多元文化需求的高度重视。",
            en: "The company recently announced that it has obtained ISO9001 quality system certification and ISO14001 environmental system certification, marking an important progress in the company's quality management and environmental protection. At the same time, the company has also won the KOSHER certification, which marks that the company's products meet the dietary law requirements of Jewish religious regulations, providing strong support for the international market expansion of the company's products. The acquisition of these certifications will further consolidate the company's position in the industry and demonstrate the company's high attention to quality, environment, and multicultural needs.",
          },
          url: "https://files.catbox.moe/2qnpix.jpg",
          time: 1725934998005,
        },
        {
          title: {
            zh: "工厂完全按照GMP要求建造而成，并配有标准的实验室",
            en: "The factory is built entirely in accordance with GMP requirements and is equipped with standard laboratories.",
          },
          sub: {
            zh: "工厂完全按照GMP（Good Manufacturing Practice）要求建造而成，并配备了标准的实验室。这意味着我们的生产设施符合严格的生产标准，以确保产品的质量和安全性。同时，标准的实验室设施将有助于我们进行产品质量控制和研发工作，以满足市场和客户的需求。这些举措将进一步提升我们的生产能力和产品质量，为客户提供更优质的产品和服务。",
            en: "The factory is built entirely in accordance with GMP (Good Manufacturing Practice) requirements and is equipped with standard laboratories. This means that our production facilities meet strict production standards to ensure the quality and safety of our products. At the same time, standard laboratory facilities will help us to carry out product quality control and research and development work to meet the needs of the market and customers. These measures will further enhance our production capacity and product quality, providing customers with better products and services.",
          },
          url: "https://files.catbox.moe/tx8d9z.jpg",
          time: 1725936118288,
          animation: {
            classes: "fadeIn",
            delay: 0,
            duration: 1000,
            iteration: 0,
          },
        },
      ],
    },
  },
]);
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
}
</style>

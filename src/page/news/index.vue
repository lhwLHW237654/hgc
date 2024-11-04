<template>
  <el-image src="https://files.catbox.moe/sik5cg.png" class="test" fit="cover"></el-image>
  <div class="news">
    <newsBox v-model="companyList" title="newsBox.title" />
    <newsBox v-model="industryList" title="newsBox.industry" />
  </div>
</template>

<script setup>
import newsBox from "./components/newsBox.vue";

const companyList = ref([
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
  },
]);

const industryList = ref([]);
</script>

<style lang="scss" scoped>
.test {
  height: 30vh;
  width: 100%;
}
</style>

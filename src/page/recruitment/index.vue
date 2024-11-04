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

const info = ref([
  {
    title: {
      zh: "外贸专员",
      en: "Foreign Trade Specialist",
    },
    number: 1,
    sub: {
      zh: `<li>人数：1</li><li>专业要求：化学、化工、国贸等专业优先</li><li>学历要求：本科以上</li><li>年龄：35岁以下</li><p><span style="color: rgb(26, 26, 26); font-size: 14px;"><strong>任职要求</strong></span><span style="color: rgb(26, 26, 26); font-size: 14px;">：<br>1、本科以上学历,英语四级以上，化学、化工、国贸等专业优先；<br>2、1-3 年大宗化学原料贸易经验,对化学品市场情况熟悉；<br>3、良好的人际关系处理能力、沟通能力；<br>4、敏锐的市场洞察能力和勤奋刻苦精神；<br>5、有较高的职业素养,对风险控制及风险分析有深刻认识。<br></span></p><p><span style="color: rgb(26, 26, 26); font-size: 14px;"><strong>工作职责：</strong></span><span style="color: rgb(26, 26, 26); font-size: 14px;"><br>1、处理公司询盘，联系客户，核算报价，合同谈判，成交 订单；<br>2、拓展海外市场，开发新客户， 定期跟踪维护老客户；<br>3、日常处理客户邮件，联系客户，处理订单和售后问题；<br>4、参加国内外展会，拜访客户，市场分析</span></p><p><span style="color: rgb(225, 60, 57);">有意者可将简历发送至邮箱：jc@synova.com.cn</span></p><p><br></p><p><br></p>`,
      en: "",
    },
  },
]);

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
.test{
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

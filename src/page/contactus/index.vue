<template>
  <div class="contactus">
    <div class="title">
      <span>{{ $t("menu.contactus") }}</span>
    </div>
    <div class="main fc">
      <div class="item ac" v-for="(item, index) in info" :key="index">
        <div class="icon c">
          <component :is="item.icon" theme="outline" size="32" fill="#fff" />
        </div>
        <div class="text fc jb">
          <span class="tit">{{ item.title[locale] }}</span>
          <span>{{ item.text[locale] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const info = ref([
  {
    icon: "i-building-one",
    title: {
      zh: "公司名称",
      en: "companyName",
    },
    text: {
      zh: "晶诚生物科技有限公司",
      en: "Synova Biotech Co., Ltd.",
    },
  },
  {
    icon: "i-local",
    title: {
      zh: "公司地址",
      en: "companyAddress",
    },
    text: {
      zh: "安徽省淮北市新型煤化工合成材料基地淮中北路6号",
      en: "No.6 Huaizhong North Road, New Coal Chemical Synthetic Materials Base, Huaibei City, Anhui Province, China.",
    },
  },
  {
    icon: "i-envelope-one",
    title: {
      zh: "邮编",
      en: "zipCode",
    },
    text: {
      zh: "235100",
      en: "235100",
    },
  },
  {
    icon: "i-phone-booth",
    title: {
      zh: "座机电话",
      en: "Tel",
    },
    text: {
      zh: "0561-7683555",
      en: "+86-0561-7683555",
    },
  },
  {
    icon: "i-phone-call",
    title: {
      zh: "手机电话",
      en: "Phone",
    },
    text: {
      zh: "18626329813",
      en: "+86-18626329813",
    },
  },
  {
    icon: "i-tencent-qq",
    title: {
      zh: "QQ",
      en: "QQ",
    },
    text: {
      zh: "995658927",
      en: "995658927",
    },
  },
  {
    icon: "i-mail",
    title: {
      zh: "邮箱",
      en: "email",
    },
    text: {
      zh: "jc@synova.com.cn",
      en: "jc@synova.com.cn",
    },
  },
  {
    icon: "i-web-page",
    title: {
      zh: "网站",
      en: "Web",
    },
    text: {
      zh: "http://www.synova.com.cn",
      en: "http://www.synova.com.cn",
    },
  },
]);
</script>

<style lang="scss" scoped>
.contactus {
  background-image: url("https://files.catbox.moe/ffubxy.png");
  background-size: 100%;
  height: 90vh;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 10%;
  padding-right: 10%;
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
      .icon {
        background-color: #409eff;
        padding: 10px;
        border-radius: 50%;
        margin-right: 20px;
      }
      margin-top: 10px;
      margin-bottom: 10px;
      .tit {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>

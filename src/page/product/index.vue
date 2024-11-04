<template>
  <el-image src="https://files.catbox.moe/sik5cg.png" class="test" fit="cover"></el-image>
  <div class="product">
    <div class="main">
      <div class="title">
        <span>{{ $t("productTitle") }}</span>
      </div>
      <div class="selectBox c">
        <el-input
          size="large"
          @keyup.enter="toSearchResult(selectValue)"
          v-model="selectValue"
          class="input"
          :placeholder="$t('productBox.select.placeholder')">
          <template #append>
            <el-button @click="toSearchResult(selectValue)">
              <i-search style="margin-right: 10px" />
              {{ $t("productBox.select.search") }}
            </el-button>
          </template>
        </el-input>
      </div>
      <div class="c">
        <div class="productBox f w">
          <div class="box fc c" v-for="(item, index) in data" :key="index" @click="$router.push(`/productDetail?id=${item.id}`)">
            <el-image :src="item.url" fit="cover" class="image"></el-image>
            <span>{{ item.title[locale] }}</span>
            <i-right-c theme="outline" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import documentData from "./data/documentData.json";
import allListData from "./data/listData.js"; //引入所有的列表数据
const { locale } = useI18n();
const router = useRouter();
const selectValue = ref("");

const data = ref([
  {
    id: 1,
    title: {
      zh: "L/DL/D-氨基酸",
      en: "L/DL/D-Amino Acids",
    },
    url: "https://files.catbox.moe/fuy81t.jpg",
  },
  {
    id: 2,
    title: {
      zh: "氨基酸酯/酰胺",
      en: "Amino Acid Esters/Amides",
    },
    url: "https://files.catbox.moe/c80k64.jpg",
  },
  {
    id: 3,
    title: {
      zh: "氨基酸盐/复合盐",
      en: "Amino Acid Salts/Complex Salts",
    },
    url: "https://files.catbox.moe/slh8nj.jpg",
  },
  {
    id: 4,
    title: {
      zh: "衍生物/保护氨基酸",
      en: "Derivatives/Protected Amino Acids",
    },
    url: "https://files.catbox.moe/pizlvh.jpeg",
  },
  {
    id: 5,
    title: {
      zh: "其他",
      en: "Others",
    },
    url: "https://files.catbox.moe/9w2l7k.png",
  },
]);

function toSearchResult() {
  router.push({
    path: "/productDetail",
    query: {
      keyWord: selectValue.value,
    },
  });
}
</script>

<style lang="scss" scoped>
.test{
  height: 30vh;
  width: 100%;
}
.product {
  // background-color: #fafafa;
  background-image: url("https://www.delixi-electric.com/r/cms/delixi/newdelixi/images/bg01.jpg");
  padding-top: 100px;
  padding-bottom: 200px;
  .main {
    width: 100%;
    .title {
      margin: 10px;
      width: 80%;
      font-size: 36px;
      font-weight: 800;
      margin-left: 10%;
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
    .selectBox {
      margin-top: 100px;
      width: 100%;
      .input {
        width: 60%;
      }
    }
    .productBox {
      margin-top: 100px;
      width: 80%;
      .box {
          margin: 5px;
        width: 290px;
        height: 290px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden;
        transition: 0.4s;
        color: #2d2d2d;
        .image {
          width: 80%;
          height: 80%;
          border-radius: 4px;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .icon {
          transition: transform 0.3s;
        }
        span {
          text-wrap: nowrap;
          margin-top: 20px;
          color: #409eff;
        }
        &:hover {
          cursor: pointer;
          box-shadow: 0 4px 20px #ccc;
          .image {
            transform: scale(1.05);
          }
          .icon {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>

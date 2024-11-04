<template>
  <div class="productBox">
    <div class="title" :style="titleStyle">
      <span>{{ $t("productTitle") }}</span>
    </div>
    <div class="selectBox c" :style="{ paddingTop: data.title.titleBottom }">
      <el-input size="large" @keyup.enter="toSearchResult(selectValue)" v-model="selectValue" class="input" :placeholder="$t('productBox.select.placeholder')">
        <template #append>
          <el-button @click="toSearchResult(selectValue)">
            <i-search style="margin-right: 10px" />
            {{ $t("productBox.select.search") }}
          </el-button>
        </template>
      </el-input>
    </div>

    <div class="productList f w" :style="{ paddingTop: data.title.titleBottom }">
      <div class="box fc c" v-for="(item, index) in data.productList" :key="index" @click="$router.push(`/productDetail?id=${item.id}`)">
        <el-image :src="item.url" fit="cover" class="image"></el-image>
        <span>{{ item.title[locale] }}</span>
        <i-right-c theme="outline" class="icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { useRouter } from "vue-router";
const router = useRouter();
const selectValue = ref("");

const data = defineModel();

const titleStyle = computed(() => ({
  fontSize: data.value.title.size,
  fontWeight: data.value.title.weight,
}));
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
.productBox {
  .title {
    margin: 10px;
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
    width: 100%;
    .input {
      width: 60%;
    }
  }
  .row {
    height: 100%;
    .box {
      height: 100%;
      padding: 5px;
    }
  }
  .productList {
    width: 100%;
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
        margin-top: 20px;
        color: #409eff;
        white-space: nowrap;
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
</style>

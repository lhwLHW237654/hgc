<template>
  <div class="honorsBox">
    <div class="title" :style="titleStyle">
      <span>{{ $t("honorsBox.title") }}</span>
    </div>
    <div class="content ac fc" :style="{ paddingTop: data.title.titleBottom }">
      <div class="qualification f w">
        <div class="item ac fc" v-for="(item, index) in data.qualification" :key="index" :style="{ background: item.background }">
          <el-image :src="item.url" fit="cover" class="image" />
          <span class="text" :style="getStyle(item)">{{ item.fontStyle.text[locale] }}</span>
        </div>
      </div>
      <div class="honors">
        <el-row>
          <el-col :span="12">
            <div class="title" :style="titleStyle">
              <span>{{ $t("honorsBox.honorsTitle") }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="jb">
              <div></div>
              <div>
                <div class="spanItem" v-for="(item, index) in data.honors" :key="index">
                  {{ item[locale] }}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const titleStyle = computed(() => ({
  fontSize: data.value.title.size,
  fontWeight: data.value.title.weight,
}));

function getStyle(item) {
  return {
    fontSize: item.fontStyle.size,
    fontWeight: item.fontStyle.weight,
    margin: item.fontStyle.margin,
  };
}

const data = defineModel();
</script>

<style lang="scss" scoped>
.honorsBox {
  .title {
    width: 80%;
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
  .content {
    .qualification {
      width: 100%;
      .item {
        width: 290px;
        margin: 5px;
        padding: 20px;
        border-radius: 4px;
        .image {
          width: 80%;
          border-radius: 4px;
        }
      }
    }
    .honors {
      display: none;
      margin-top: 100px;
      width: 100%;
      .title {
        opacity: 0.7;
        span {
          &::after {
            display: none !important;
          }
        }
      }
      .spanItem {
        position: relative;
        line-height: 40px;
        color: #333436;
        &::before {
          content: "■";
          margin-right: 20px;
          color: #409eff;
        }
      }
    }
  }
}
</style>

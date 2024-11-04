<template>
  <div class="footBox fc je">
    <div class="logo f ac">
      <el-image class="image" :src="logo" fit="cover"></el-image>
      <div class="fc">
        <span class="text">{{ $t("title.text") }}</span>
      </div>
    </div>
    <div class="top jb">
      <div class="left">
        <div class="title">{{ $t("menu.contactus") }}</div>
        <div class="info">
          <p>{{ $t("footBox.address") }}</p>
          <p>{{ $t("footBox.name") }}</p>
          <p>{{ $t("footBox.phone") }}</p>
          <p>{{ $t("footBox.email") }}</p>
        </div>
      </div>
      <div class="main">
        <div class="title">{{ $t("footBox.map") }}</div>
        <div class="linkList">
          <span class="link" v-for="(item, index) in menu" :key="index" @click="$router.push(item.path)">{{ $t(item.name) }}</span>
        </div>
      </div>
      <div class="right">
        <el-image class="image" src="https://innolcon.com/templates/default/images/wx.jpg" fit="cover"></el-image>
      </div>
    </div>
  </div>
  <div class="button c">{{ $t("footBox.copyright") }}</div>
</template>

<script setup>
import logo from "@/assets/logo.svg";
import store from "@/store/modules/main.js";
const { menu } = storeToRefs(store());
</script>

<style lang="scss" scoped>
.footBox {
  background-color: #f1f3f5;
  height: 500px;
  padding-left: 10%;
  padding-right: 10%;
  .logo {
    .image {
      width: 80px;
    }
    .text {
      font-size: 40px;
      font-weight: 700;
      color: #4a92bd;
    }
    .sub{
      font-size: 20px;
      font-weight: 700;
      color: #4a92bd;
    }
  }
  .top {
    .main {
      .linkList {
        .link {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          &:not(:first-child) {
            margin-left: 10px;
          }
          cursor: pointer;
          &:hover {
            color: #409eff;
          }
        }
      }
    }
  }
}
.title {
  font-size: 18px;
  color: #262626;
  margin-bottom: 20px;
  font-weight: bold;
}
.button {
  width: 100%;
  color: #6c6c6c;
  background: #f7f7f7;
  border-top: 1px solid #d1d1d1;
  padding: 15px 0;
  overflow: hidden;
  height: 50px;
}
</style>

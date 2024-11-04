<template>
  <div class="detail">
    <div class="title">
      <i-arrow-left theme="outline" class="icon" @click="$router.back()" />
      <span class="text" v-if="!(keyWord || keyWord == 0)">{{ data.title[locale] }}</span>
      <span class="text" v-else>{{ $t("product.searchResult") }}</span>
    </div>
    <div class="main">
      <vxe-grid v-bind="data.table[locale]"></vxe-grid>
    </div>
    <el-dialog v-model="dialogObj.viewDoc" width="80%" destroy-on-close @wheel.stop top="3vh">
      <div style="height: 88vh; overscroll-behavior: contain; margin-top: 15px">
        <vxe-grid v-bind="documentTable[locale]"></vxe-grid>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import documentData from "./data/documentData.json";
import allListData from "./data/listData.js"; //引入所有的列表数据
import { ElMessage } from "element-plus";
const { locale } = useI18n();
const dialogObj = reactive({
  viewDoc: false,
});

const route = useRoute();
const listId = route.query.id;
const keyWord = route.query.keyWord;
const currentListTitle = [
  {
    zh: "L/DL/D-氨基酸",
    en: "L/DL/D-Amino Acids",
  },
  {
    zh: "氨基酸酯/酰胺",
    en: "Amino Acid Esters/Amides",
  },
  {
    zh: "氨基酸盐/复合盐",
    en: "Amino Acid Salt/Compound Salt",
  },
  {
    zh: "衍生物/保护氨基酸",
    en: "Derivatives/Protected Amino Acids",
  },
  {
    zh: "其他",
    en: "Others",
  },
];

const data = ref({
  title: currentListTitle[listId - 1],
  table: {
    zh: {
      border: true,
      rowConfig: {
        isHover: true,
      },
      columns: [
        { type: "seq", width: 70, title: "序号" },
        { field: "name", title: "产品名称" },
        { field: "cas", title: "CAS No." },
        {
          title: "操作",
          width: 200,
          cellRender: {
            name: "VxeButtonGroup",
            props: {
              mode: "text",
            },
            options: [{ content: "查看文档", name: "view" }],
            events: {
              click(cellParams, params) {
                viewDoc(cellParams.row);
              },
            },
          },
        },
      ],
      data: allListData.zh["list" + listId],
    },
    en: {
      border: true,
      rowConfig: {
        isHover: true,
      },
      columns: [
        { type: "seq", width: 70, title: "NO." },
        { field: "name", title: "Product Name" },
        { field: "cas", title: "CAS No." },
        {
          title: "Operate",
          width: 200,
          cellRender: {
            name: "VxeButtonGroup",
            props: {
              mode: "text",
            },
            options: [{ content: "viewDocument", name: "view" }],
            events: {
              click(cellParams, params) {
                viewDoc(cellParams.row);
              },
            },
          },
        },
      ],
      data: allListData.en["list" + listId],
    },
  },
});
const documentTable = ref({
  zh: {
    maxHeight: "100%",
    border: true,
    align: "center",
    rowConfig: {
      isHover: true,
    },
    columns: [
      {
        title: "",
        children: [
          { type: "seq", width: 70, title: "序号" },
          { field: "name.zh", title: "检测项目" },
          {
            title: "执行标准",
            children: [
              { field: "aji", title: "AJI-92" },
              { field: "EP", title: "EP11.0" },
              { field: "USP", title: "USP46" },
              { field: "CP", title: "CP2020" },
            ],
          },
        ],
      },
    ],
    data: [],
  },
  en: {
    maxHeight: "100%",
    border: true,
    align: "center",
    rowConfig: {
      isHover: true,
    },
    columns: [
      {
        title: "",
        children: [
          { type: "seq", width: 70, title: "seq" },
          { field: "name.en", title: "Test Item" },
          {
            title: "Executive Standard",
            children: [
              { field: "aji", title: "AJI-92" },
              { field: "EP", title: "EP11.0" },
              { field: "USP", title: "USP46" },
              { field: "CP", title: "CP2020" },
            ],
          },
        ],
      },
    ],
    data: [],
  },
});

onMounted(() => {
  if (keyWord || keyWord == 0) {
    let allList = {
      zh: [...allListData.zh.list1, ...allListData.zh.list2, ...allListData.zh.list3, ...allListData.zh.list4, ...allListData.zh.list5],
      en: [...allListData.en.list1, ...allListData.en.list2, ...allListData.en.list3, ...allListData.en.list4, ...allListData.en.list5],
    };

    console.log(allList[locale.value]);
    data.value.table[locale.value].data = allList[locale.value].filter((i) => i.name.indexOf(keyWord) != -1 || i.cas.indexOf(keyWord) != -1);
  }
});

//查看文档
function viewDoc(row) {
  let findResult = documentData.find((i) => i.title[locale.value] == row.name);
  if (!findResult) {
    ElMessage.error("暂无文档");
    return;
  }
  let rowDocumentData = findResult.detail;

  documentTable.value[locale.value].columns[0].title = row.name;
  if ("enterprise" in rowDocumentData[0]) {
    documentTable.value.zh.columns[0].children[2].children = [{ field: "enterprise", title: "企业标准" }];
    documentTable.value.en.columns[0].children[2].children = [{ field: "enterprise", title: "Enterprise standard" }];
  } else if ("DAB-10" in rowDocumentData[0]) {
    documentTable.value.zh.columns[0].children[2].children = [{ field: "DAB-10", title: "DAB-10" }];
    documentTable.value.en.columns[0].children[2].children = [{ field: "DAB-10", title: "DAB-10" }];
  } else {
    documentTable.value.zh.columns[0].children[2].children = [
      { field: "aji", title: "AJI-92" },
      { field: "EP", title: "EP11.0" },
      { field: "USP", title: "USP46" },
      { field: "CP", title: "CP2020" },
    ];
    documentTable.value.en.columns[0].children[2].children = [
      { field: "aji", title: "AJI-92" },
      { field: "EP", title: "EP11.0" },
      { field: "USP", title: "USP46" },
      { field: "CP", title: "CP2020" },
    ];
  }
  documentTable.value[locale.value].data = rowDocumentData;
  dialogObj.viewDoc = true;
}
</script>

<style lang="scss" scoped>
.detail {
  padding-top: 100px;
  padding-bottom: 100px;
  .title {
    width: 80%;
    font-size: 36px;
    font-weight: 800;
    margin-left: 10%;
    .icon {
      margin-right: 20px;
      cursor: pointer;
    }
    .text {
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
    margin-top: 100px;
    margin-left: 10%;
    margin-right: 10%;
  }
}
:deep(.vxe-cell--label) {
  font-size: 20px !important;
}
:deep(.vxe-cell--title) {
  font-size: 20px !important;
}
</style>

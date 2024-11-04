import VueI18n from "@/locales/index.js";

export default defineStore("main", {
  state: () => {
    return {
      menu: [
        {
          name: "menu.home",
          path: "/home",
        },
        {
          name: "menu.aboutus",
          path: "/about",
        },
        {
          name: "menu.product",
          path: "/product",
        },
        {
          name: "menu.news",
          path: "/news",
        },
        {
          name: "menu.recruitment",
          path: "/recruitment",
        },
        {
          name: "menu.QE",
          path: "/QE",
        },
        {
          name: "menu.contactus",
          path: "/contactus",
        },
      ],
    };
  },
});

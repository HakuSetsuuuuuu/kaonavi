import type { ThemeConfig } from "antd";

export const config: ThemeConfig = {
  token: {
    colorPrimary: "#c2dee5",
    colorText: "#003c3ce0",
    // #FFDA1B
    // #2F7417
  },
  components: {
    Layout: {
      headerBg: "#c2dee5",
      siderBg: "#c2dee5",
    },
    Menu: {
      darkItemBg: "#c2dee5",
      darkItemColor: "#008b8b",
      darkItemSelectedBg: "#008b8b",
      darkPopupBg: "#c2dee5",
      horizontalItemBorderRadius: 4,
      itemSelectedColor: "#008b8b",
    },
  },
};
// // 通过静态方法获取
// const { getDesignToken, useToken } = theme;
// const globalToken = getDesignToken(config);

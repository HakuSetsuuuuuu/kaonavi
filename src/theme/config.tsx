import type { ThemeConfig } from "antd";

export const config: ThemeConfig = {
  token: {
    colorPrimary: "#447FE0",
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
    },
  },
};
// // 通过静态方法获取
// const { getDesignToken, useToken } = theme;
// const globalToken = getDesignToken(config);

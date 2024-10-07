import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const CustomContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <>
    <Content
      style={{
        padding: 8,
        margin: 0,
        flex: 1,
        minHeight: 280,
        height: "100%",
        width: "100%",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Outlet />
    </Content></>
  );
};

export default CustomContent;

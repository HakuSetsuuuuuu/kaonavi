import React from "react";
import { MenuProps, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import logo from "./../../logo.svg";

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  paddingInline: 20,
  lineHeight: "64px",
  justifyContent: "space-between",
};

export default function CustomHeader() {
  const items: MenuProps["items"] = [
    "プロファイルブック",
    "シートガレージ",
    "ワークフロー",
    "人的資本データナビ",
  ].map((key) => ({
    key,
    label: key,
  }));

  return (
    <Header style={headerStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{ height: "100%", maxWidth: "120px", width: "100%" }}
        />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0, marginLeft: "20px" }}
      />
    </Header>
  );
}

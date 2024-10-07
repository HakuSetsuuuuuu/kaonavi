import React, { useState } from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, theme, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("プロファイルブック", "1", <PieChartOutlined />),
  getItem("シートガレージ", "2", <DesktopOutlined />),
  getItem("ワークフロー", "sub1", <UserOutlined />, [
    getItem("新規申請", "3"),
    getItem("申請の確認", "4"),
  ]),
];

const CustomSider: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width="250"
      style={{
        background: colorBgContainer,
        borderRight: collapsed ? 0 : "1px solid #f0f0f0",
        height: "100%"
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default CustomSider;

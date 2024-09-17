import { Menu, Input, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import logo from "./../../logo.svg";
import avatar1 from "assets/avatar/avatar1.jpg";
import {
  UnorderedListOutlined,
  AuditOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

const { Search } = Input;

export default function CustomHeader() {
  const items: MenuProps["items"] = [
    {
      label: (
        <a href="https://www.antgroup.com">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              border: "2px dashed #2F7417",
              borderRadius: "4px",
              backgroundColor: "#c2dee5",
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <Avatar src={avatar1} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ fontWeight: "bold" }}>子超兄</div>
                <div style={{ color: "#888" }}>06.一般社員</div>
              </div>
              <div style={{ marginTop: "4px", color: "#555" }}>
                nagano@zhimingsoft.com
              </div>
            </div>
          </div>
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "自分の情報を見る",
      key: "1",
    },
    {
      label: "パスワード変更",
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: <a href="https://www.aliyun.com">ユーザー環境</a>,
      key: "3",
    },
    {
      label: "メール・通知送信履歴",
      key: "4",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      label: "ログアウト",
      key: "5",
      danger: true,
    },
  ];

  return (
    <Header
      style={{ display: "flex", alignItems: "center", paddingInline: 20 }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          height: "100%",
          maxWidth: "120px",
          width: "auto",
          cursor: "pointer",
        }}
        onClick={() => window.location.reload()}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          {
            label: "プロファイルブック",
            key: "1",
          },
          {
            label: "シートガレージ",
            key: "2",
          },
          {
            label: "ワークフロー",
            key: "3",
          },
          {
            label: "人的資本データナビ",
            key: "4",
          },
        ]}
        style={{ flex: 2, minWidth: 0, marginLeft: "20px" }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Search placeholder="メンバーを検索" />
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          {
            label: "申請・届出",
            key: "apply",
            icon: <AuditOutlined style={{ fontSize: "18px" }} />,
          },
          {
            label: "ToDo",
            key: "todo",
            icon: <UnorderedListOutlined style={{ fontSize: "18px" }} />,
          },
        ]}
        style={{ flex: 1, minWidth: 0, margin: "0 20px" }}
      />

      <Dropdown menu={{ items }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Avatar size="large" src={avatar1}  />
          <DownOutlined style={{ fontSize: "10px", padding: "0 10px" }} />
        </div>
      </Dropdown>
    </Header>
  );
}

import { Breadcrumb } from "antd"; 

export const CustomBreadcrumb = () => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>ホームページ</Breadcrumb.Item>
      <Breadcrumb.Item>お知らせ・ToDo</Breadcrumb.Item>
    </Breadcrumb>
  );
};

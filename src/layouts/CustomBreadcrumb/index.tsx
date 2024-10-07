import { Breadcrumb } from "antd"; 

export const CustomBreadcrumb = () => {
  return (
    <Breadcrumb style={{ margin: "8px 24px" }}>
      <Breadcrumb.Item>ホームページ</Breadcrumb.Item>
      <Breadcrumb.Item>お知らせ・ToDo</Breadcrumb.Item>
    </Breadcrumb>
  );
};

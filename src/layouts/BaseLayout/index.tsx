import { Layout } from "antd";
import CustomHeader from "../CustomHeader";
import CustomSider from "../CustomSider";
import CustomContent from "layouts/CustomContent";
import { CustomBreadcrumb } from "layouts/CustomBreadcrumb";
import CustomFooter from "layouts/CustomFooter";

export default function BaseLayout() { 
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader />
      <Layout>
        <CustomSider />
        <Layout style={{ padding: "0 24px 8px 24px" }}>
          <CustomBreadcrumb />
          <CustomContent />
          <CustomFooter />
        </Layout>
      </Layout>
    </Layout>
  );
}

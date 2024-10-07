import { Layout } from "antd";
import CustomHeader from "../CustomHeader";
import CustomContent from "layouts/CustomContent";
import CustomFooter from "layouts/CustomFooter";

export default function BaseLayout() { 
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader />
      <Layout style={{ padding: "12px", flexDirection: 'column' }}>
        <CustomContent/>
        <CustomFooter />
      </Layout>
    </Layout>
  );
}

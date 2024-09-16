import { Footer } from "antd/es/layout/layout"; 

export default function CustomFooter() {
  return (
    <Footer style={{ textAlign: "center",padding:"8px" }}>
      Kaonavi ©{new Date().getFullYear()} Created by zhimingsoft
    </Footer>
  );
}

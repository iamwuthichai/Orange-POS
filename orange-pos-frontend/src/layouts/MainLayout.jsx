import React, { useState } from "react";
import { HomeOutlined, ProductOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Breadcrumb } from "antd";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MainSider from "./MainSider";
const { Header, Sider, Content, Footer } = Layout;

export default function MainLayout({ children, breadcrumbTitle }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // รับค่าที่ถูกส่งกลับจาก MainHeader
  const handleToggle = (value) => {
    setCollapsed(value); // อัปเดต state
  };

  return (
    <Layout>
      <MainSider onToggleCollapse={collapsed} />

      <Layout>
        <MainHeader onToggleCollapse={handleToggle} />

        <Breadcrumb
          items={[
            {
              href: "",
              title: <HomeOutlined />,
            },
            {
              href: "",
              title: (
                <>
                  <ProductOutlined />
                  <span>รายการสินค้า</span>
                </>
              ),
            },
          ]}
          style={{
            padding: 24,
          }}
        />

        <Content
          style={{
            margin: "0px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>

        <MainFooter />
      </Layout>
    </Layout>
  );
}

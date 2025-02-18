import React, { useState, useEffect } from "react";
import { Button, Layout, theme, Segmented, Flex } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

export default function MainHeader({ onToggleCollapse }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick = () => {
    const newValue = !collapsed;
    setCollapsed(newValue);
    onToggleCollapse(newValue); // ส่งค่ากลับไปยัง Parent
  };

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Flex justify="space-between" align="center">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleClick}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Segmented
          shape="round"
          options={[
            {
              value: "light",
              icon: <SunOutlined />,
            },
            {
              value: "dark",
              icon: <MoonOutlined />,
            },
          ]}
          style={{
            margin: 10,
          }}
        />
      </Flex>
    </Header>
  );
}

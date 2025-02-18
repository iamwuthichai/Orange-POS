import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ProductOutlined,
  HistoryOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

export default function MainSider({ onToggleCollapse }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    setCollapsed(onToggleCollapse);
  }, [onToggleCollapse]);
  
  useEffect(() => {
    const handleResize = () => {
      setIsHidden(window.innerWidth <= 470);
    };

    // ตรวจสอบขนาดหน้าจอเริ่มต้น
    handleResize();

    // เพิ่ม event listener
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isHidden) return null; // ซ่อน Component ถ้าหน้าจอ <= 470px
  
  const menuData = [
    {
      key: "1",
      icon: <ProductOutlined />,
      label: "Product",
      // onclick: navigate(`/`),
    },
    {
      key: "2",
      icon: <HistoryOutlined />,
      label: "History",
      // onclick: navigate(`/history`),
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "Setting",
    },
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="dark" >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuData}
      />
    </Sider>
  );
}

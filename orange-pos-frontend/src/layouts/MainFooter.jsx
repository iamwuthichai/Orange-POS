import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function MainFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      ORANGE POS ©{new Date().getFullYear()} Created by <a href="https://github.com/iamwuthichai" className="text-blue-500">iamwuthichai</a>
    </Footer>
  );
}

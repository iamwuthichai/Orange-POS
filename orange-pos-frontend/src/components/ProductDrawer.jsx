import React, { useEffect, useState } from "react";
import { Button, Drawer, Image, Flex, Card, Input, FloatButton } from "antd";
import {
  ShoppingCartOutlined,
  MinusOutlined,
  PlusOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { addToCart } from "../services/cartService";

export default function ProductDrawer({ dataSource }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [productCount, setProductCount] = useState(1);

  // Loading
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleMinusProductCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const handlePlusProductCount = () => {
    setProductCount(productCount + 1);
  };

  const handleAddToCart = () => {
    setOpen(false);
    alert("เพิ่มสินค้าใส่ตะกร้าเรียบร้อย");
  };

  return (
    <>
      <Button color="cyan" variant="dashed" onClick={showLoading}>
        <ShoppingCartOutlined /> เลือกสินค้า
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={
          <p>
            <b>รายละเอียดสินค้า</b>
          </p>
        }
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {dataSource && (
            <Flex
              align="center"
              justify="center"
              style={{ padding: 16, height: 200 }}
            >
              <Image
                src={dataSource.image}
                style={{
                  maxWidth: "100%",
                  maxHeight: 200,
                  objectFit: "contain",
                }}
                preview={{ mask: "ดูภาพขยาย" }}
              />
            </Flex>
          )}
        </Image.PreviewGroup>

        <Card
          style={{
            width: "100%",
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <p className="font-extrabold">{dataSource.title}</p>
          <p className="font-bold">ราคา ${dataSource.price}</p>
          <p>{dataSource.description}</p>
        </Card>

        <Flex gap="middle" style={{ margin: 10 }}>
          <Button
            shape="circle"
            size="large"
            icon={<MinusOutlined style={{ color: "#13c2c2" }} />}
            onClick={(e) => {
              handleMinusProductCount();
            }}
          ></Button>
          <Input
            defaultValue={productCount}
            value={productCount}
            style={{ textAlign: "center" }}
            readOnly
          />
          <Button
            shape="circle"
            size="large"
            icon={<PlusOutlined style={{ color: "#13c2c2" }} />}
            onClick={(e) => {
              handlePlusProductCount();
            }}
          ></Button>
        </Flex>
        <Button
          color="cyan"
          variant="solid"
          size="large"
          style={{ width: "100%" }}
          onClick={(e) => {
            handleAddToCart();
          }}
        >
          <ShoppingCartOutlined /> ใส่ตะกร้า
        </Button>
      </Drawer>
    </>
  );
}

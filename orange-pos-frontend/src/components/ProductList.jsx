import React, { useState, useEffect } from "react";
import { Col, Row, Image, Flex, Empty } from "antd";
import { Card, Typography } from "antd";
import ProductDrawer from "./ProductDrawer";
const { Meta } = Card;
const { Title, Text } = Typography;

export default function ProductList({ dataSource }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dataSource);
  }, [dataSource]);

  return (
    <Row gutter={[16, 16]}>
      {products.length > 0 ? (
        products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              align="center"
              justify="center"
              hoverable
              style={{
                width: "100%",
                maxWidth: 300,
                padding: 10,
                margin: "auto",
              }}
              cover={
                <Flex
                  align="center"
                  justify="center"
                  style={{ padding: 16, height: 200 }}
                >
                  <Image
                    src={product.image}
                    style={{
                      maxWidth: "100%",
                      maxHeight: 180,
                      objectFit: "contain",
                    }}
                    preview={{ mask: "ดูภาพขยาย" }}
                  />
                </Flex>
              }
            >
              <Meta
                title={
                  <Title level={5} style={{ margin: 0 }}>
                    {product.title}
                  </Title>
                }
                description={
                  <Text
                    style={{ fontSize: 18 }}
                    className="text-cyan-500 font-bold"
                  >
                    ${product.price}
                  </Text>
                }
              />

              <Flex
                align="center"
                justify="center"
                style={{ padding: "10px 0px 0px 0px" }}
              >
                <ProductDrawer dataSource={product} />
              </Flex>
            </Card>
          </Col>
        ))
      ) : (
        <Col span={24} style={{ textAlign: "center", padding: 20 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Col>
      )}
    </Row>
  );
}

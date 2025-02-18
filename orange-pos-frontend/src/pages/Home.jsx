import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductList from "../components/ProductList";
import apiService from "../services/apiService";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await apiService.get("products");
      setProducts(productData);
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <ProductList dataSource={products}></ProductList>
    </MainLayout>
  );
}

export default Home;

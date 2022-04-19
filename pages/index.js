// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

//config
import { API_URL } from "../config/index";
//components
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

export default ({ products }) => {
  return (
    <Layout>
      <Banner text="Lindas Delish" />
      <Card products={products} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/products?populate=*`);
  const products = await res.json();
  return {
    props: { products: products.data },
    revalidate: 1,
  };
}

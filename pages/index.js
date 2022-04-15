// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default () => {
  return (
    <Layout>
      <Banner text="Lindas Delish" />

      <button className="btn-outlined">Lägg till korgen</button>
      <Products />
    </Layout>
  );
};

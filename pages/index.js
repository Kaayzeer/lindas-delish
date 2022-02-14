import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Linda´s Delish | E-handel</title>
        <meta name="description" content="e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header text="Lindas Delish" />
    </Layout>
  );
};

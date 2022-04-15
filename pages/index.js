// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card";

export default (/* { events } */) => {
  return (
    <Layout>
      <Banner text="Lindas Delish" />
      <Card /* events={events}  */ />
    </Layout>
  );
};

/* export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/products?populate=*`);
  const events = await res.json();

  return {
    props: { events: events.data },
    revalidate: 1,
  };
} */
